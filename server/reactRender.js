import React from 'react';
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Router from '../client/router'

export function reactRender(req) {
    const context = {};
    const content = ReactDOMServer.renderToString(
        (<StaticRouter location={req.path} context={context}>
            {Router}
        </StaticRouter>)
    );
    return `<html>
            <head>
                <title></title>
            </head>
            <body>
                <div id="app">${content}</div>
            </body>
            <script src="/client/bundle.js"></script>
            </html>`
}


