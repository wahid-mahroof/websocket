import { webSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function (socket) {
  setInterval(() => {
    socket.send("Current price of solana is " + Math.random());
  }, 500);
});

webSocketServer.on("message", (e) => {
  console.log(e);
});

webSocketServer.on("message", (e) => {
  console.log(e.toString());
  console.log(e.toString() === "ping");

  if (e.toString() === "ping") {
    webSocketServer.send("pong");
  }
});
