import express, {type Request, type Response} from "express";

//Se gestionan las rutas acaconst app = express();

const app = express();

app.get("/", (request: Request, response: Response)=>{
    response.send("hola mundo")

});

app.get("/check", (request: Request, response: Response)=>{
    response.send("Check")
});

export default app;