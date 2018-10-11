import express from 'express';
import { reactRender } from './reactRender'

const server = express();
const port = 3000;

server.set('views', 'server');
server.set('view engine', 'ejs');
server.use(express.static('dist'));

server.get('/', (req ,res) => {
    reactRender(req, res);
})

server.listen(port, () => {
    console.log(`Node Server Start SUCCESS!`);
    console.log(`http url: ` ,`http://localhost:${port}`)
})
