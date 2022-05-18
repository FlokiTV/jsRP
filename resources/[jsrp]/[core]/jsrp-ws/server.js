const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const PORT = 30130;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  /* options */
});

exports("log", (log) => {
  io.emit("log", log);
});

io.on("connection", (socket) => {
  console.log("[jsrp:ws] new socket " + socket.id);
});

console.log("[jsrp:ws] listening on port " + PORT);

httpServer.listen(PORT);
