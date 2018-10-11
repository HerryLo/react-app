import express from 'express';
import { reactRender } from './reactRender'

const server = express();
const port = 3000;


server.use(express.static('dist'));

server.get('/', (req ,res) => {
    res.send(reactRender(req));
})

server.listen(port, () => {
    console.log(`Node Server Start SUCCESS!`);
    console.log(`http url: ` ,`http://localhost:${port}`)
})
