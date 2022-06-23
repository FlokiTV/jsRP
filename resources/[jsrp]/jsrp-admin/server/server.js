/// <reference types="@citizenfx/server" />
const resource = GetCurrentResourceName();
const root = GetResourcePath(resource);
const jsRP = exports.jsrp.self;
const { onRequest, addCommand } = jsRP();
const { readFile } = require("fs");
const cmdPrefix = "admin:";

const focus = (source) => {
  jsRP().onClient(source, "nui", "focus", [true, true]);
};

const loadHTML = (name) => {
  return new Promise((resolve) => {
    readFile(root + "/template/" + name + ".html", "utf8", (err, data) => {
      let html = data;
      resolve(html);
    });
  });
};

addCommand(cmdPrefix + "nc", (source, args, rawCommand) => {
  console.log("nc");
  emitNet("nc", source);
});

addCommand(cmdPrefix + "cds", (source, args, rawCommand) => {
  emitNet("jsrp-admin:cds", source);
  focus(source);
});

addCommand("debug:html", async (source, args) => {});
/*
  Init NUI on Client
*/
onRequest(resource, "init", async (player) => {
  let html = await loadHTML("screen");
  jsRP().onClient(player, "nui", "addHTML", ["jsrp-admin-screen", html]);
  return;
});
/*
  Request ScreenShoot
*/
addCommand(cmdPrefix + "get-ss", (source, args) => {
  let [nId] = args;
  let player = jsRP("user").get(nId);
  let to = player ? player.sId : source;
  jsRP().onClient(to, "nui", "emit", [
    {
      requestScreenShot: {
        url: "https://discord.com/api/webhooks/985915299310219294/sRh5ozfEN4GL7VnyhveMw9lo2xLDaVpgtlshmpzZ8aqP6jSgVuE8g4QxNvlnIzRgH7ft",
      },
    },
  ]);
});

/*
  Debug
*/
addCommand(cmdPrefix + "debug", async (source, args) => {
  let html = await loadHTML("debug");
  jsRP().onClient(source, "nui", "addHTML", ["jsrp-admin-debug", html]);
  emitNet("jsrp-admin:debug", source); //request on client tick info
});

onRequest(resource, "debug-player", (player) => {
  console.log(player);
  return;
});
