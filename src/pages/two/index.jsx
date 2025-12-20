
import { lazy} from 'react';

import {Routes, Route } from 'react-router-dom';
const A = lazy(()=>import('@/pages/two/a'));
const B = lazy(()=>import('@/pages/two/b'));
const C = lazy(()=>import('@/pages/two/c'));


import TwoLayout from '@/layout/two';


function Two(){
  console.log(location.pathname);
  
    return (
        <>
            <Routes>
                {/* 所有页面共享 Layout */}
                <Route path="/" element={<TwoLayout />}>
                    <Route index element={<A/>} />
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