"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wss = new WebSocketServer({ port: 8000 });
wss.on("connection", function (socket) {
    socket.send("hello");
});
