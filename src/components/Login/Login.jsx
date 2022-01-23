import { observer } from "mobx-react-lite";
import { Card, Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from "./index.module.scss";
import { login } from "../../apis/index";
import { useStores } from "../../stores/index";
import LoginBg from "./LoginBg";
import { useNavigate } from "react-router-dom";
import { setItem } from "@/utils/localStorage";

export const Login = observer(() => {
  const { userInfo } = useStores();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const { username, password } = values;
    let data = {
      username,
      password,
    };
    login(data).then((res) => {
      if (res.msg === "用户不存在") {
        message.info(res.msg);
      } else {
        message.success("登陆成功");
        userInfo.changeUseInfo(res.msg);
        setItem("userInfo", {
          isLogin: true,
        });
        navigate(`/articles`);
      }
    });
  };

  const onValuesChange = (changedValue, allValues) => {
    if (changedValue?.isVisitor === true) {
      userInfo.setVisitor();
      form.setFieldsValue({
        username: "test",
        password: "123456",
      });
    } else if (changedValue?.isVisitor === false) {
      form.setFieldsValue({
        username: "",
        password: "",
      });
    }
  };

  const toSignIn = () => {
    message.warn("暂不支持注册");
  };

  return (
    <div className={styles.outer_wrap}>
      <Card title="发布系统">
        {/* <div className={styles.title}>发布系统</div> */}
        <Form
          form={form}
          name="normal_login"
          className={styles.login_form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onValuesChange={onValuesChange}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "请输入用户名!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="用户名"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "请输入密码!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="请输入密码"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="isVisitor" valuePropName="checked" noStyle>
              <Checkbox>访客</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.login_form_button}
            >
              登录
            </Button>
            <div>
              <div className={styles.sign_in} onClick={toSignIn}>
                还没有账号?去注册!
              </div>
            </div>
          </Form.Item>
        </Form>
      </Card>
      <LoginBg></LoginBg>
    </div>
  );
});
