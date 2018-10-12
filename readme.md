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


```
$ git clone https://github.com/HerryLo/react-app.git

<!-- install -->
$ npm install

<!-- start local Server -->
$ npm run dev
```
```npm start``` after, local visit![http://localhost:3000](http://localhost:3000)。
