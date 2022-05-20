const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const PORT = GetConvar("jsrp-ws:port", 30130);
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  /* options */
});

exports("log", (log) => {
  io.emit("log", "[S] " + log);
});

exports("prettylog", (from, modl, log) => {
  io.emit("prettylog", from, modl, log);
});

onNet("jsrp:ws:prettylog", (from, modl, log) => {
  io.emit("prettylog", from, modl, log);
});

onNet("jsrp:ws:log", (log) => {
  io.emit("log", "[C] " + log);
});

io.on("connection", (socket) => {
  console.log("[jsrp:ws] new socket " + socket.id);
});

console.log("[jsrp:ws] listening on port " + PORT);

httpServer.listen(PORT);
