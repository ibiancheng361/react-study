import {lazy} from 'react';
import {createBrowserRouter} from 'react-router-dom';


const A = lazy(()=>import('@/pages/two/a'));
const B = lazy(()=>import('@/pages/two/b'));
const C = lazy(()=>import('@/pages/two/c'));



const Layout = lazy(()=>import('@/components/Layout'));
const TwoLayout = lazy(()=>import('@/components/TwoLayout'));


const About = lazy(()=>import('@/pages/about'));
const Home = lazy(()=>import('@/pages/home'));
const Concat = lazy(()=>import('@/pages/concat'));
const Two = lazy(()=>import('@/pages/two'));
const TodoList = lazy(()=>import('@/pages/todolist'));
const NotFound = lazy(()=>import('@/pages/404'));


const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'about',
                element:<About/>
            },
            {
                path:'concat',
                element:<Concat/>
            },
            {
                path:'two/*',
                element:<Two/>
                // children:[
                //     {
                //         index:true,
                //         element:<A/>
                //     },
                //     {
                //         path:'a',
                //         element:<A/>
                //     },
                //     {
                //         path:'b',
                //         element:<B/>
                //     },
                //     {
                //         path:'c',
                //         element:<C/>
                //     },
                //     {
                //         path:'*',
                //         element:<div>NotFound-two</div>
                //     },
                // ]
            },
            {
                path:'todolist',
                element:<TodoList/>
            },
            {
                path:'*',
                element:<NotFound/>
            },
        ]
    }
]);

export default router;