import { Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
export const HeaderNav = () => {
  const { SubMenu } = Menu;
  const [current, setCurrent] = useState("home");
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home">
        <Link to="/home">首页</Link>
      </Menu.Item>
      <Menu.Item key="articles">
        <Link to="/articles"> 文章</Link>
      </Menu.Item>
      <Menu.Item key="shuoshuo">
        <Link to="/shuoshuo">说说</Link>
      </Menu.Item>
      <SubMenu key="SubMenu" title="操作">
        <Menu.ItemGroup title="">
          <Menu.Item key="setting:1">退出</Menu.Item>
          <Menu.Item key="setting:2">去博客页</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
    </Menu>
  );
};
