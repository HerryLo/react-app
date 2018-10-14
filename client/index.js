import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider}  from 'react-redux';
import store from './redux/index';
import Router from './router'

console.log(store.getState());

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