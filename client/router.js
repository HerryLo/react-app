import React from 'react'
import { Route } from 'react-router-dom'
import Home from './component/Home'
import Login from './component/Login'

export const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        loadData: Home.loadData,
        key: 'app'
    },{
        path: '/login',
        exact: true,
        component: Login,
        key: 'login'
    }
]

const Router = (
    <div>
        {routes.map(route => (
            <Route {...route} />
        ))}
    </div>
)

export default Router