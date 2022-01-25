import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { Table, Space, Button, Anchor, message } from "antd";
import { getAllArticles,deleteArticle } from "@/apis/index.js";
import { useEffect } from "react";
import { useStores } from "@/stores/index.js";

export const Article = observer(() => {
  const { Link } = Anchor;
  const { articlesList } = useStores();
  const naviagte = useNavigate();
  const toWriteArticle = () => {
    naviagte("/writeArticle/new");
  };

  const getData = async() => {
    const result = await getAllArticles();
    articlesList.changeArticles(handleData(result.list));
  }

  useEffect(() => {
    getData();
  },[]);

  // 处理返回的文章列表
  const handleData = (data) => {
    data.forEach((item, index) => {
      item.key = index;
      item.tags = item.tag;
    });
    return data;
  };

  // 删除一篇文章
  const deleteIt = async(id) => {
    let data = {id}
    const {msg,code} = await deleteArticle(data)
    if(code === 1) {
      message.success(msg)
      getData()
    }
  }

  // 编辑一篇文章
  const editIt = (id) => {
    naviagte(`/writeArticle/${id}`)
  }

  const columns = [
    {
      title: "标题",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "日期",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "分类",
      dataIndex: "classify",
      key: "classify",
    },
    {
      title: "标签",
      key: "tags",
      dataIndex: "tags",
    },
    {
      title: "URL",
      key: "action",
      render: (text, record) => (
        <Anchor>
          <Link href={record.name} title={record.name} />
        </Anchor>
      ),
    },
    {
      title: "操作",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={editIt.bind(this,record._id)}>编辑</Button>
          <Button type="primary" danger onClick={deleteIt.bind(this,record._id)}>
            删除
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div>
        <Button type="primary" onClick={toWriteArticle}>
          写文章
        </Button>
      </div>
      <Table columns={columns} dataSource={articlesList.articles} />
    </>
  );
});
