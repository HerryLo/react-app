import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider}  from 'react-redux';
import { matchRoutes } from 'react-router-config'

// 直接调用客户端方法
import Router, { routes } from '../client/router'
import getStore from '../client/redux/index';

export function reactRender(req, res) {
    try{
        const context = {
            css: []
        };
        const promises = [];
        const store = getStore();
        const matchedRoute = matchRoutes(routes, req.path);

        // 保证组件中 loadData的运行
        matchedRoute.forEach((item, match) => {
            if(item.route.loadData){
                promises.push(item.route.loadData(store, item, match));
            }
        })

        Promise.all(promises).then(()=> {
            const element = <Provider store={store}>
                <StaticRouter location={req.path} context={context}>
                    { Router }
                </StaticRouter>
                </Provider>;
            const content = ReactDOMServer.renderToString(element);
            const cssStatic = context.css.length?context.css.join('\n'):''
            res.render('index', {
                content, 
                cssStatic, 
                state: JSON.stringify(store.getState())
            });
        })
    }catch(e){
        console.log(e);
        res.status(404);
    }
}


