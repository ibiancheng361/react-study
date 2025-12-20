import {lazy} from 'react';
import {createBrowserRouter} from 'react-router-dom';


const A = lazy(()=>import('@/pages/two/a'));
const B = lazy(()=>import('@/pages/two/b'));
const C = lazy(()=>import('@/pages/two/c'));



const Layout = lazy(()=>import('@/components/Layout'));
const TwoLayout = lazy(()=>import('@/layout/two'));


const About = lazy(()=>import('@/pages/about'));
const Home = lazy(()=>import('@/pages/home'));
const Concat = lazy(()=>import('@/pages/concat'));
const TodoList = lazy(()=>import('@/pages/todolist'));
const NotFound = lazy(()=>import('@/pages/404'));


console.log('hello owrld222');
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
                element:<TwoLayout/>,
                children:[
                    {
                        path:'a',
                        element:<A/>
                    },
                    {
                        path:'b',
                        element:<B/>
                    },
                    {
                        path:'c',
                        element:<C/>
                    },
                    {
                        path:'*',
                        element:<A/>
                    },
                ]
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