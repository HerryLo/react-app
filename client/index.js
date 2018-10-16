import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider}  from 'react-redux';
import { getClientStore } from './redux/index';
import Router from './router'

const store = getClientStore();
const App = ()=> {
    return (
        <Provider store={store}>
            <BrowserRouter>
                {Router}
            </BrowserRouter>
        </Provider>
    )
}

ReactDOM.hydrate(
    <App />,
    document.getElementById('app')
)