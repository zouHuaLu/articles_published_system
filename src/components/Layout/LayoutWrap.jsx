import { ConfigProvider, Layout } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import { observer } from "mobx-react-lite";
import { Outlet } from "react-router-dom";
import { HeaderNav } from "../Header";
import styles from "./index.module.scss";

const { Header, Content, Footer } = Layout;

export const LayoutWrap = observer(() => {
  return (
    <ConfigProvider locale={zhCN}>

        <Header style={{ padding: 0 }}>
          <HeaderNav></HeaderNav>
        </Header>
        <Content className={styles.content}>
          {/* 此处是嵌套路由 */}
          <Outlet></Outlet>
        </Content>
        <Footer></Footer>

    </ConfigProvider>
  );
});
