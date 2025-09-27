import express, { type Request, type Response } from "express";

class App {
  private app: express.Application;
  constructor() {
    this.app = express();
  }

  private routes(): void {
    this.app.get("/", (request: Request, response: Response) => {
      response.send("hola mundo");
    });

    this.app.get("/check", (request: Request, response: Response) => {
      response.send("Check");
    });

    this.app.get("/test", (request: Request, response: Response) => {
      response.send("esto es una prueba");
    });
    this.app.get("/nodemon", (request: Request, response: Response) => {
      response.send("nodemon funcionando");
    });
  }

  getApp(): express.Application {
    this.routes();
    return this.app;
  }
}

export default new App().getApp();