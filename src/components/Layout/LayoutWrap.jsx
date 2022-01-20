import { ConfigProvider, Layout } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import { observer } from "mobx-react-lite";
import styles from "./index.module.scss";
import {Outlet } from 'react-router-dom'


const { Header, Content, Footer, Sider } = Layout;

export const LayoutWrap = observer(() => {
  return (
    <ConfigProvider locale={zhCN}>
      <Layout>
        <Header>
          <div className={styles.title}>文章发布系统</div>
        </Header>
        <Layout>
          <Sider className={styles.slider}>左</Sider>
          <Content>
            <Outlet />
          </Content>
          <Sider className={styles.slider}>右</Sider>
        </Layout>
        <Footer></Footer>
      </Layout>
    </ConfigProvider>
  );
});
