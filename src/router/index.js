import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../components/load'

// 路由配置
const RouteConfig = [
    {
        path: "/",
        component: ()=> <p>/</p>
    }, {
        path: "/activity",
        component: ()=>{
            Loadable({
                loader: () => import("../page/activity/activity"),
                loading: Loading
            })
        },
        routes: []
    }
]

export default RouteConfig;