// export default App;
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { LayoutWrap } from "./components/Layout/LayoutWrap";
import { Home } from "./components/Home";
import { Article } from "./components/Articles/Article";
import { Shuoshuo } from "./components/Shuoshuo/Shuoshuo";
import { WriteArticle } from "./components/WriteArticle";
import "./App.scss";
import { getItem } from "@/utils/localStorage.js";

function App() {
  const userInfo = getItem("userInfo");
  return (
    <BrowserRouter>
      <Routes>
        {userInfo ? (
          <>
            <Route path='*' element={<Navigate to="/home" />}></Route>
            <Route path="/" element={<LayoutWrap />}>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/articles" element={<Article />}></Route>
              <Route path="/shuoshuo" element={<Shuoshuo />}></Route>
              <Route path="/writeArticle" element={<WriteArticle />}>
                <Route path=":articleId" element={<WriteArticle />}></Route>
              </Route>
            </Route>
          </>

        ) : (
          <>
            <Route path='*' element={<Navigate to="/login" />}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
