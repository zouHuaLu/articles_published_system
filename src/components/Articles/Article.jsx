import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { Table, Tag, Space, Button, Anchor } from "antd";

export const Article = observer(() => {
  const { Link } = Anchor;
  const naviagte = useNavigate();
  const toWriteArticle = () => {
    naviagte("/writeArticle");
  };
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
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
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
          <Button type="primary">编辑</Button>
          <Button type="primary" danger>
            删除
          </Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  return (
    <>
      <div>
        <Button type="primary" onClick={toWriteArticle}>
          写文章
        </Button>
      </div>
      <Table columns={columns} dataSource={data} />
    </>
  );
});
