import React from 'react';
import express from 'express';
import App from '../client/app.js';
import ReactDOMServer from 'react-dom/server'

const server = express();
const port = 3000;

const content = ReactDOMServer.renderToString(<App />);

server.set('views', 'server');
server.set('view engine', 'ejs');
server.use(express.static('dist'));

server.get('/', (req ,res) => {
    res.render('index' ,{ content: content });
})

server.listen(port, () => {
    console.log(`Node Server Start SUCCESS!`);
    console.log(`http url: ` ,`http://localhost:${port}`)
})
