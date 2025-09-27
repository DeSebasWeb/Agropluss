import http from 'http';
import express from 'express';

export class ServerBoostrap {
    private app!: express.Application;

    constructor(app: express.Application) {
        this.app = app;
    }

    init(): Promise<Boolean> {
        return new Promise((resolve, reject) => {
            const server = http.createServer(this.app);
            const PORT = process.env.PORT || 4000;
            server.listen(PORT).on("listening", () => {
                console.log(`Server running on the directory http://localhost:${PORT}`);
                resolve(true);
            })
            .on("error", (error) =>{
                console.log(`Error starting the server: ${error}`);
            })
        });
    }
}