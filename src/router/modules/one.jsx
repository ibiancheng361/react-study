import {lazy} from 'react';

const pagesMap = {
    a: lazy(() => import('@/pages/one/a')),
    b: lazy(() => import('@/pages/one/b')),
    c: lazy(() => import('@/pages/one/c')),
};

const OneLayout = lazy(() => import('@/layout/one'))
const oneRouter = {
    path:'one/*',
    element:<OneLayout/>,
    children:[
        {
            path:'a',
            element:<pagesMap.a/>
        },
        {
            path:'b',
            element:<pagesMap.b/>
        },
        {
            path:'c',
            element:<pagesMap.c/>
        },
        {
            path:'*',
            element:<pagesMap.a/>
        },
    ]
}

export default oneRouter;
export {oneRouter}