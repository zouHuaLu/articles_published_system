import { observer } from "mobx-react-lite";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const Article = observer(() => {
  const naviagte = useNavigate();
  const toWriteArticle = () => {
    naviagte("/writeArticle");
  };
  return (
    <div>
      这是文章页
      <Button type="primary" onClick={toWriteArticle}>
        写文章
      </Button>
    </div>
  );
});
