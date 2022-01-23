import { ConfigProvider, Layout } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import { observer } from "mobx-react-lite";
import { Outlet } from "react-router-dom";
import { HeaderNav } from "../Header";

const { Header, Content, Footer } = Layout;

export const LayoutWrap = observer(() => {
  return (
    <ConfigProvider locale={zhCN}>
      <Layout>
        <Header style={{ padding: 0 }}>
          <HeaderNav></HeaderNav>
        </Header>
        <Content>
          {/* 此处是嵌套路由 */}
          <Outlet></Outlet>
        </Content>
        <Footer></Footer>
      </Layout>
    </ConfigProvider>
  );
});
