import { lazy } from 'react';
import './app.scss'


// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { BrowserRouter, Routes, Route, Outlet, Link,NavLink } from 'react-router-dom';


const About = lazy(()=>import('./pages/about'));
const Home = lazy(()=>import('./pages/home'));
const Concat = lazy(()=>import('./pages/concat'));
const Two = lazy(()=>import('./pages/two'));
const TodoList = lazy(()=>import('./pages/todolist'));
const NotFound = lazy(()=>import('./pages/404'));

// 布局组件
function Layout() {
  return (
    <div>
      <nav className="menu">
        <NavLink className="menu-item" to="/">首页</NavLink> | 
        <NavLink className="menu-item" to="/about">关于</NavLink> | 
        <NavLink className="menu-item" to="/two/*">多级路由</NavLink> | 
        <NavLink className="menu-item" to="/concat">联系</NavLink> | 
        <NavLink className="menu-item" to="/todolist">todolist</NavLink>
      </nav>

      {/* 子路由会渲染在这里 */}
      <Outlet /> 
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 所有页面共享 Layout */}
        <Route path="/*" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="concat" element={<Concat />} />
          <Route path="two/*" element={<Two />} />
          <Route path="todolist" element={<TodoList />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
