import React from 'react'
import { Route } from 'react-router-dom'
import App from './app'
import Login from './component/Login'

export default(
    <div>
        <Route path='/' exact component={App}/>
        <Route path='/login' exact component={Login}/>
    </div>
)