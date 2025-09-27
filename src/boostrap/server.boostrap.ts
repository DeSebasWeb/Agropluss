import http from 'http';
import express from 'express';

export class ServerBoostrap {
    private app!: express.Application;

    constructor(app: express.Application) {
        this.app = app;
    }

    init() {
        const server = http.createServer(this.app);
        const port = process.env.PORT || 4000;

        server.listen(port, () => {
            console.log(`Server is running on port http://localhost:${port}`);
        });
    }
}