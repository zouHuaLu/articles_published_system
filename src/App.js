// import logo from './logo.svg';
// import {observer} from 'mobx-react-lite'
// import {useStores} from './stores/index'
// import {Input } from 'antd'
// import './App.scss';

// const App = observer(()=> {
//   const {userInfo} = useStores()
//   const changeAge = (e)=>{
//     userInfo.changeAge(e.target.value)
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <div>个人信息</div>
//         <div>
//           <p>姓名：{userInfo.name}</p>
//           <p>年龄：{userInfo.age}</p>
//         </div>
//         <div>输入后更改<Input onChange={changeAge}/></div>
//       </header>
//     </div>
//   );
// })

// export default App;
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { NotFound } from "./components/NotFound";
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
        {userInfo?.isLogin ? (
          <Route path="/" element={<Navigate to="/home" />}></Route>
        ) : (
          <Route path="/" element={<Login></Login>}></Route>
        )}
        <Route path="/" element={<LayoutWrap />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/articles" element={<Article />}></Route>
          <Route path="/shuoshuo" element={<Shuoshuo />}></Route>
          <Route path="/writeArticle" element={<WriteArticle />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
