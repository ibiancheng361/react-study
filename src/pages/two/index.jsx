
import { lazy,Suspense  } from 'react';

import { BrowserRouter, Routes, Route, Outlet, Link,NavLink,useNavigate  } from 'react-router-dom';
const A = lazy(()=>import('./a'));
const B = lazy(()=>import('./b'));
const C = lazy(()=>import('./c'));

// 布局组件
function OwnLayout() {
    const navigate = useNavigate();


    return (
      <div>
        <button onClick={() => navigate('..')} className="back-btn">
          返回上级
        </button>


        <nav className="menu">
          <NavLink className="menu-item" to="a">page-A</NavLink> | 
          <NavLink className="menu-item" to="b">page-B</NavLink> | 
          <NavLink className="menu-item" to="c">page-C</NavLink>
        </nav>
  
        {/* 子路由会渲染在这里 */}
        <Suspense fallback={<div>加载子页面...</div>}>
            <Outlet />
        </Suspense>
      </div>
    );
  }

function Two(){
    return (
        <>
            <Routes>
                {/* 所有页面共享 Layout */}
                <Route path="/" element={<OwnLayout />}>
                    <Route path="/*" element={<A />} />
                    <Route path="a" element={<A />} />
                    <Route path="b" element={<B />} />
                    <Route path="c" element={<C />} />
                    <Route path="*" element={<div>二级路由页面未找到</div>} />
                </Route>
            </Routes>
        </>
    );
}
export default Two;