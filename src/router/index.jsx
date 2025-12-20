import {lazy} from 'react';
import {createBrowserRouter} from 'react-router-dom';


// const A = lazy(()=>import('@/pages/two/a'));
// const B = lazy(()=>import('@/pages/two/b'));
// const C = lazy(()=>import('@/pages/two/c'));



const AppLayout = lazy(()=>import('@/layout/app'));
// const TwoLayout = lazy(()=>import('@/layout/two'));


const About = lazy(()=>import('@/pages/about'));
const Home = lazy(()=>import('@/pages/home'));
const Concat = lazy(()=>import('@/pages/concat'));
const TodoList = lazy(()=>import('@/pages/todolist'));
const Ucenter = lazy(()=>import('@/pages/ucenter'));
const Login = lazy(()=>import('@/pages/login'));

const NotFound = lazy(()=>import('@/pages/404'));


import {oneRouter} from '@/router/modules/one';
import {twoRouter} from '@/router/modules/two';

const router = createBrowserRouter([
    {
        path:'/ucenter',
        element:<Ucenter/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/',
        element:<AppLayout/>,
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
            oneRouter,
            twoRouter,
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