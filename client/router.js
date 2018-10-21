import React from 'react'
import { renderRoutes } from 'react-router-config'
import mianRouter from './router/index'
import App from './App'

export const routes = [{
        path: '/',
        component: App,
        routes: [
            ...mianRouter
        ]
    }
]

const Router = (
    <div>
        {renderRoutes(routes)}
    </div>
)

export default Router