/// <reference types="@citizenfx/server" />
const resource = GetCurrentResourceName();
const root = GetResourcePath(resource);
const jsRP = exports.jsrp.self;
const { onRequest, response, addCommand } = jsRP();
const { readFile } = require("fs");

const focus = (source) => {
  emitNet("jsrp-nui:focus", source, true, true);
};

RegisterCommand("nc", function (source, args, rawCommand) {
  console.log("nc");
  emitNet("nc", source);
});

RegisterCommand("cds", function (source, args, rawCommand) {
  emitNet("jsrp-admin:cds", source);
  focus(source);
});

const loadHTML = (name) => {
  return new Promise((resolve) => {
    readFile(root + "/template/" + screen + ".html", "utf8", (err, data) => {
      let html = data;
      resolve(html);
    });
  });
};
/*
  Init NUI on Client
*/
onRequest(resource, "init", (player) => {
  let html = loadHTML("screen");
  emitNet("jsrp-nui:html", player, "jsrp-admin-screen", html, true);
  return;
});

onRequest(resource, "send-ss", (img) => {
  console.log(img);
  // let b64 = data.split(",")[1]; // get only base64
  // sendMessage(b64toBlob(b64), { content: 'Resized Image'})
  return;
});

addCommand("getSS", (source, args) => {
  emitNet("jsrp-nui:emit", source, { requestScreenShot: [] });
});
