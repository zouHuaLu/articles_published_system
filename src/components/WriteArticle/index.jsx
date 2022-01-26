import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import styles from "./index.module.scss";
import "./github-dark.css";
import { useState,useEffect } from "react";
import { Form, Input, Button, Select, DatePicker, message } from "antd";
import { addArticle } from "@/apis/index.js";
// 用于净化输出的HTML代码
import DOMPurify from "dompurify";
// 用于解析路由
import {useParams,useNavigate} from 'react-router-dom'
import {getArticle} from '@/apis/index.js'
import moment from 'moment'

export const WriteArticle = () => {
  const [form] = Form.useForm();
  let navigate = useNavigate()
  let parmas = useParams()
  //代码高亮配置
  hljs.configure({
    tabReplace: "",
    classPrefix: "hljs-",
    languages: [
      "CSS",
      "HTML",
      "JavaScript",
      "Python",
      "TypeScript",
      "Markdown",
    ],
  });
  // Markdown配置
  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
    gfm: true, // 允许 Git Hub标准的markdown.
    pedantic: false, // 不纠正原始模型任何的不良行为和错误（默认为false）
    sanitize: false, // 对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
    tables: true, // 允许支持表格语法（该选项要求 gfm 为true）
    breaks: false, // 允许回车换行（该选项要求 gfm 为true）
    smartLists: true, // 使用比原生markdown更时髦的列表
    smartypants: false, // 使用更为时髦的标点
  });

  const { TextArea } = Input;
  const { Option } = Select;
  const [content, setContent] = useState("");
  const onFinish = async(values) => {
    const time = values["releaseDate"].format("YYYY-MM-DD HH:mm:ss");
    if (!content) {
      message.warn("文章不能为空");
      return;
    }
    const escapeContent = content.replace(/'/g,'&apos;')
    delete values["releaseDate"];
    let article_id
    if(parmas.articleId === 'new'){
      article_id = 'new'
    }else{
      article_id = parmas.articleId
    }
    let data = {
      ...values,
      content:escapeContent,
      time,
      article_id
    };
    const {code,msg} = await addArticle(data);
    if(code === 1){
      message.success(msg)
      navigate('/articles')
    }
  };

  // 根据id查询文章信息
  const getArticleData = async(id) => {
    let args = {
      id
    }
    const {code,data} =  await getArticle(args)
    if(code === 1){
      form.setFieldsValue({
        title:data[0].title,
        classify:data[0].classify,
        tag:data[0].tag,
        releaseDate:moment(data[0].time,'YYYY-MM-DD HH:mm:ss')
      })
      setContent(data[0].content.replace(/&apos;/g,"'"))
    }
  }

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  useEffect(()=>{
    if(parmas.articleId === 'new'){
      setContent('')
    }else{
      getArticleData(parmas.articleId)
    }
  },[])// eslint-disable-line
  return (
    <>
      <Form
        name="basic"
        layout={"inline"}
        onFinish={onFinish}
        autoComplete="off"
        form={form}
      >
        <Form.Item
          label="文章标题："
          name="title"
          rules={[{ required: true, message: "请输入文章标题!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="文章分类："
          name="classify"
          rules={[{ required: true, message: "请选择一个分类!" }]}
        >
          <Select placeholder="请选择一个分类" allowClear>
            <Option value="vue">vue</Option>
            <Option value="react">react</Option>
            <Option value="计算机基础">计算机基础</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="文章标签："
          name="tag"
          rules={[{ required: true, message: "请选择一个标签!" }]}
        >
          <Select placeholder="请选择一个标签" allowClear>
            <Option value="vue">vue</Option>
            <Option value="react">react</Option>
            <Option value="计算机基础">计算机基础</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="发布日期："
          name="releaseDate"
          rules={[{ required: true, message: "请选择日期!" }]}
        >
          <DatePicker showTime />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            发布
          </Button>
        </Form.Item>
      </Form>
      <div className={styles.content_weap}>
        <div className={styles.input_wrap}>
          <TextArea onChange={onChangeContent} value={content} rows={50} />
        </div>
        <div className={styles.show_wrap}>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                marked.parse(content).replace(/<pre>/g, "<pre id='hljs'>")
              ),
            }}
          ></div>
        </div>
      </div>
    </>
  );
};
