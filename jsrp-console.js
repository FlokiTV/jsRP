var io = require("socket.io-client");
var socket = io.connect("http://localhost:30130", { reconnect: true });

socket.on("connect", () => {
  console.log("Connected!", socket.id);
  socket.on("log", (log) => {
    console.log(log);
  });
  // socket.onAny((eventName, ...args) => {
  //   console.log(eventName);
  //   console.log(args);
  // });
});
