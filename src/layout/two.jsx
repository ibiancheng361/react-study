
import { Suspense  } from 'react';
import {Outlet,NavLink,useNavigate  } from 'react-router-dom';

function Two(){
    const navigate = useNavigate();
    return (
        <div>
            <div><h2>二级路由</h2></div>
            <div>
                <button onClick={() => navigate('..')} className="back-btn">
                返回上级
                </button>
            </div>
            <div>
                <nav className="menu">
                    <NavLink className="menu-item" to="/two/a">page-A</NavLink> | 
                    <NavLink className="menu-item" to="/two/b">page-B</NavLink> | 
                    <NavLink className="menu-item" to="/two/c">page-C</NavLink>
                </nav>
            </div>


            <div>
                <Suspense fallback={<div>加载子页面中...</div>}>
                    <Outlet /> {/* 这里会渲染 A、B、C 等子组件 */}
                </Suspense>
            </div>
        </div>
    );
}
export default Two;