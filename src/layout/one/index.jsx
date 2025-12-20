
import { Suspense  } from 'react';
import {Outlet,NavLink,useNavigate  } from 'react-router-dom';

import './style.scss';

function One(){

    
    const navigate = useNavigate();
    return (
        <div className="one-container">
            <div>
                <nav className="menu">
                    <NavLink className="menu-item" to="/one/a?id=1">组件参数</NavLink> | 
                    <NavLink className="menu-item" to="/one/b?id=2">page-B</NavLink> | 
                    <NavLink className="menu-item" to={{
                        pathname:'/one/c',
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