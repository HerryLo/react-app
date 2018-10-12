# react isomorphism
    react web template

## Depend
- [express](http://expressjs.com/) static server
- [webpack](https://webpack.js.org/) Bundle with webpack
- [nodemon](https://www.npmjs.com/package/nodemon) wacth file server
- [npm-run-all](https://www.npmjs.com/package/npm-run-all) CLI tool to run multiple npm-scripts in parallel or sequential
- [react@16、react-dom@16](https://reactjs.org/docs/getting-started.html)、[react-router-dom@4](https://reacttraining.com/react-router/web/guides/server-rendering)
- [ejs](https://www.npmjs.com/package/ejs) html template


## Project structure
```
.
|——server 服务端
|  |—— index.ejs                  ejs template
|  |—— index.js                   server
|  |—— reactRender.js             react server render
|——client 客户端
|  |—— component                  public component
|  |—— pages                      page
|  |—— router                     router config
|  |—— styles                     styles
|  |—— app.js                     
|  |—— index.js                   client react
|  |—— router.js                  main router
|——config 配置
|  |—— webapck.base.js            base webpack
|  |—— webapck.dev.js             dev webpack
``` 

## server render 

下面将node服务端代码展示出来，希望可以帮到大家！

node静态服务

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

react服务端渲染文件

/server/reactRender.js
```javascript
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
```

对于服务端渲染，希望可以慎重考虑，它会加大服务器的运行压力，相反客户端渲染在CDN加速的前提下，也会有不错的效果。

## Start
```
$ git clone https://github.com/HerryLo/react-app.git

<!-- install -->
$ npm install

<!-- start local Server -->
$ npm run dev
```
```npm start``` after, local visit![http://localhost:3000](http://localhost:3000)。
