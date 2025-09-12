import express from 'express';
import http from 'http'


const app = express();

const server = http.createServer();

server.listen(4000, ()=> {
    console.log("Se ha iniciado el servidor en el puerto http://localhost:4000")
});
