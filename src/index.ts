import app from './app.js';
import { ServerBoostrap } from "./boostrap/server.boostrap.js";

const server = new ServerBoostrap(app);

const start = async () => {
    try{
        const instances = [server.init()];
        await Promise.all(instances);
    }catch(error){
        console.log('Error starting the server', error);
    }    
}

start();
