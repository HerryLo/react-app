import React from 'react';
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Router from '../client/router'

export function reactRender(req, res) {
    try{
        const context = {};
        const element = <StaticRouter location={req.path} context={context}>
            {Router}
        </StaticRouter>;
        const content = ReactDOMServer.renderToString(element);
        res.render('index', { content });
    }catch(e){
        console.log(e);
        res.status(404);
    }
}


