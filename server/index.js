import React from 'react';
import express from 'express';
import Home from '../app/index.js';
import ReactDOMServer from 'react-dom/server'

const server = express();
const port = 3000;

const html = `<html>
    <head>
        <title>react</title>
    </head>
    <body>
        <h1>server react</h1>
        <p>${ReactDOMServer.renderToString(<Home />)}</p>
    </body>
</html>`

server.get('/', (req ,res) => {
    res.send(html);
})

server.listen(port, () => {
    console.log(`Node Server Start SUCCESS!`);
    console.log(`http url: ` ,`http://localhost:${port}`)
})
