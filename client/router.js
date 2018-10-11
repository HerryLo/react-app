import React from 'react'
import { Route } from 'react-router-dom'
import App from './app'

export default(
    <div>
        <Route path='/' exact component={App}/>
    </div>
)