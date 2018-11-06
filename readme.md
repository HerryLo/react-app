# react isomorphism
    react web template

## Depend
- [express](http://expressjs.com/) static server
- [webpack](https://webpack.js.org/) Bundle with webpack
- [nodemon](https://www.npmjs.com/package/nodemon) wacth file server
- [npm-run-all](https://www.npmjs.com/package/npm-run-all) CLI tool to run multiple npm-scripts in parallel or sequential
- [react@16、react-dom@16](https://reactjs.org/docs/getting-started.html)、[react-router-dom@4](https://reacttraining.com/react-router/web/guides/server-rendering)、[react-router-config](https://github.com/ReactTraining/react-router#readme)
- [ejs](https://www.npmjs.com/package/ejs) html template

## Start
```
$ git clone https://github.com/HerryLo/react-app.git

<!-- install -->
$ npm install

<!-- start local Server -->
$ npm run dev
```
```npm start``` after, local visit![http://localhost:3000](http://localhost:3000)。

## Project structure
```
.
|——server
|  |—— index.ejs                  ejs template
|  |—— index.js                   server
|  |—— reactRender.js             react server render
|——client
|  |—— component                  public component
|  |—— pages                      page
|  |—— router                     router config
|  |—— styles                     styles
|  |—— app.js                     
|  |—— index.js                   client react
|  |—— router.js                  main router
|——config
|  |—— webapck.base.js            base webpack
|  |—— webapck.dev.js             dev webpack
``` 

## server render 

node server code Examples:

node static server

/server/index.js
```javascript
import express from 'express';
import { reactRender } from './reactRender'

const server = express();
const port = 3000;

server.set('views', 'server');
server.set('view engine', 'ejs');
server.use(express.static('dist'));

server.get('*', (req ,res) => {
    reactRender(req, res);
})

server.listen(port, () => {
    console.log(`Node Server Start SUCCESS!`);
    console.log(`http url: ` ,`http://localhost:${port}`)
})
```

react server render file

/server/reactRender.js
```javascript
import React from 'react';
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Router from '../client/router'

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider}  from 'react-redux';
import { matchRoutes } from 'react-router-config'

// client method
import Router, { routes } from '../client/router'
import getStore from '../client/redux/index';

export function reactRender(req, res) {
    try{
        const context = {};
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
            res.render('index', { content });
        })
    }catch(e){
        console.log(e);
        res.status(404);
    }
}
```
For server rendering, I hope it can be carefully considered, it will increase the pressure of the server operation, on the contrary, client rendering in the premise of CDN acceleration, will have a good effect.

Reference : [react+react-router-dom ssr](https://alligator.io/react/react-router-ssr/)
