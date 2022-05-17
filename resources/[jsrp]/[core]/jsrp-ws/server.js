const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const PORT = 30130;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  /* options */
});

io.on("connection", (socket) => {
  console.log("[jsrp:ws]", socket);
});

console.log("[jsrp:ws] listening on port " + PORT);
httpServer.listen(PORT);
