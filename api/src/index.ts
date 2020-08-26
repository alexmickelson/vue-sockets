import dotenv from "dotenv";
import express from "express";
const app = express();
import { log } from "./Services/LoggerService";
import http from "http";

import * as WebSocket from 'ws';
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws: WebSocket) => {
    log.info('a user connected');
});


// import cors from 'cors';
// const options: cors.CorsOptions = {
//     allowedHeaders: [
//         'Origin',
//         'X-Requested-With',
//         'Content-Type',
//         'Accept',
//         'X-Access-Token',
//     ],
//     credentials: true,
//     methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
//     origin: "http://localhost:8080",
//     preflightContinue: true,
// };

// app.use(cors(options));

// dotenv.config();
// const port = process.env.SERVER_PORT;


app.get("/", (req, res) => {
    res.send("hello");
});



// app.listen(port, () => {
//     log.info(`server started at http://localhost:${port}`);
// });
server.listen(3000, () => {
    log.info(`Server started on port 3000)`);
});
