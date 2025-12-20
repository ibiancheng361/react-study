//路由工具函数

import {lazy} from 'react';


function lazyLoad(path){
    return lazy(()=>import(`@/pages/${path}`));
}


function lazyLayout(path){
    return lazy(()=>import(`@/layout/${path}`));
}


function createRoute(config){
    return config;
};


export {lazyLoad,lazyLayout,createRoute}