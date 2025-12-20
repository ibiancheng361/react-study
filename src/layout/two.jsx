
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
                    <NavLink className="menu-item" to="a">page-A</NavLink> | 
                    <NavLink className="menu-item" to="b">page-B</NavLink> | 
                    <NavLink className="menu-item" to="c">page-C</NavLink>
                </nav>
            </div>


            <Suspense callback={<div>加载中...</div>}>
                <Outlet/>
            </Suspense>
        </div>
    );
}
export default Two;