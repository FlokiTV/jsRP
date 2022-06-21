/// <reference types="@citizenfx/server" />
const resource = GetCurrentResourceName();
const root = GetResourcePath(resource);
const jsRP = exports["jsrp"].jsRP;
const { addCommand, triggerCommand, onRequest } = jsRP();
const { readFile } = require("fs");
const CFG = {
  ready: false,
};

addCommand("alert", (source, args) => {
  const text = args.join(" ");
  readFile(root + "/template/alert.html", "utf8", (err, data) => {
    let html = data.replace("{text}", text);
    emitNet("jsrp-nui:notify", -1, html);
  });
});

addCommand("alert-s", (source, args) => {
  const text = args.join(" ");
  readFile(root + "/template/success.html", "utf8", (err, data) => {
    let html = data.replace("{text}", text);
    emitNet("jsrp-nui:notify", -1, html);
  });
});

onRequest(resource, "setReady", (css) => {
  CFG.ready = true;
  emitNet("jsrp-nui:ready", -1, true);
  emit("jsrp-nui:ready", -1, true);
  return CFG.ready;
});

onRequest(resource, "getReady", (css) => {
  return CFG.ready;
});

onRequest(resource, "addCSS", (css) => {
  triggerCommand("alert", null, ["CSS carregado"]);
  return true;
});
