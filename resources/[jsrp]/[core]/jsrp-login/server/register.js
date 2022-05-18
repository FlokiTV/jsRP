const DB = exports["jsrp-db"].db();
const LOG = exports["jsrp-ws"].log;
const DEFINE = exports["jsrp-db"].define;
const root = GetResourcePath(GetCurrentResourceName());
const defaultAppearance = require(`${root}/appearance.json`);

const log = (data) => {
  LOG(`[${GetCurrentResourceName()}] ${JSON.stringify(data)}`);
};

const parseIds = (player) => {
  const ids = {};
  for (let i = 0; i < GetNumPlayerIdentifiers(player); i++) {
    const identifier = GetPlayerIdentifier(player, i).split(":");
    ids[identifier[0]] = identifier[1];
  }
  return ids;
};

DEFINE("jsrp-register", {
  username: {
    type: "STRING",
  },
});

log("init");

/*
  Events
*/
onNet("jsrp-register:getAppearance", async (sex) => {
  const player = global.source;
  // parseIds
  console.log("jsrp-register:getAppearance", parseIds(player));
  emitNet("jsrp-register:getAppearanceResponse", player, defaultAppearance[sex]);
});
