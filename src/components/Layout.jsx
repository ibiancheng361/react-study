
import { Suspense  } from 'react';
import { Outlet,NavLink } from 'react-router-dom';
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
      <Suspense callback={<div>加载中...</div>}>
        <Outlet/>
    </Suspense>
    </div>
  );
}

export default Layout
