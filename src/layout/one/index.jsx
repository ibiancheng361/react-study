
import { Suspense  } from 'react';
import {Outlet,NavLink,useNavigate  } from 'react-router-dom';

import './style.scss';

function One(){

    
    const navigate = useNavigate();
    return (
        <div className="one-container">
            <div>
                <nav className="menu">
                    <NavLink className="menu-item" to="/one/a">参数及插槽</NavLink> | 
                    <NavLink className="menu-item" to="/one/b">复合组件通讯</NavLink> | 
                    <NavLink className="menu-item" to="/one/c">复合组件通讯</NavLink> | 
                    <NavLink className="menu-item" to={{
                        pathname:'/one/d',
                        params:{
                            id:3,
                            age:10
                        }
                    }}>page-C</NavLink>
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
export default One;