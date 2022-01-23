import marked from "marked";
import styles from "./index.module.scss";
import { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";

export const WriteArticle = () => {
  const { TextArea } = Input;
  const [content, setContent] = useState("");
  return (
    <>
      {/* <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="文章标题"
        name="title"
        rules={[{ required: true, message: '请输入文章标题!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form> */}
      <div className={styles.content_weap}>
        <div className={styles.input_wrap}>
          <TextArea rows={50} />
        </div>
        <div className={styles.show_wrap}>
          <div>111</div>
        </div>
      </div>
    </>
  );
};
