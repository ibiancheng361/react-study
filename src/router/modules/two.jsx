

import {lazy} from 'react';

const pagesMap = {
    a: lazy(() => import('@/pages/two/a')),
    b: lazy(() => import('@/pages/two/b')),
    c: lazy(() => import('@/pages/two/c')),
};

const TwoLayout = lazy(() => import('@/layout/two'))
const twoRouter = {
    path:'two/*',
    element:<TwoLayout/>,
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

export default twoRouter;
export {twoRouter}