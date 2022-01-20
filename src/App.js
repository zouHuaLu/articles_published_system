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
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { LayoutWrap } from './components/Layout/LayoutWrap';
import { Shuoshuo } from './components/Shuoshuo/Shuoshuo';
import { Article } from './components/Articles/Article';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutWrap />}>
          <Route index  element={<Shuoshuo></Shuoshuo>}></Route>
          <Route path='article' element={<Article></Article>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;