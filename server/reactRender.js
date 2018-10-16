import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider}  from 'react-redux';

// 直接调用客户端方法
import Router from '../client/router'
import getStore from '../client/redux/index';

export function reactRender(req, res) {
    try{
        const context = {};
        const store = getStore()
        const element = <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                {Router}
            </StaticRouter>
        </Provider>;
        const content = ReactDOMServer.renderToString(element);
        res.render('index', { content });
    }catch(e){
        console.log(e);
        res.status(404);
    }
}


