/// <reference types="@citizenfx/server" />
const resource = GetCurrentResourceName();
const jsRP = exports["jsrp"].jsRP;
const { setModule, onRequest, response, addCommand } = jsRP();
const USERS = {};

/*
  Functions
*/
const add = (user, data) => {
  USERS[user] = data;
};
setModule("user", "add", add);

const rm = (user) => {
  delete USERS[user];
};
setModule("user", "rm", rm);

const get = (user) => {
  return USERS[user];
};
setModule("user", "get", get);

const getAll = () => {
  return USERS;
};
setModule("user", "getAll", getAll);

const find = (key, value, attr = true) => {
  let res = [];
  Object.keys(USERS).forEach((n) => {
    let user = get(n);
    if (user[key] == value) res.push(user);

    if (attr && user.attr) {
      if (user.attr[key] && user.attr[key] == value) res.push(user);
    }
  });
  return res;
};
setModule("user", "find", find);

const setAttr = (nId, key, value) => {
  let user = get(nId);
  if (typeof user.attr == "undefined") user.attr = {};
  console.log(user);
  console.log(nId, key, value);
  user.attr[key] = value;
};
setModule("user", "setAttr", setAttr);

const getAttr = (nId, key) => {
  let user = get(nId);
  // if (!user.attr) user.attr = {};
  return user.attr[key] || false;
};
setModule("user", "getAttr", getAttr);

/*
  Commands
*/
addCommand("user:list", () => {
  console.log(getAll());
});

addCommand("user:get", (source, args) => {
  let [nId] = args;
  let res = find("nId", nId);
  console.log(res);
});

addCommand("user:find", (source, args) => {
  let [key, value] = args;
  let res = find(key, value);
  console.log(res);
});

addCommand("user:setAttr", (source, args) => {
  let [nId, key, value] = args;
  setAttr(nId, key, value);
});
/*
  Register function
*/
const register = (player) => {
  const ids = jsRP().parseIdentifiers(player);
  return new Promise(async (resolve) => {
    let userId = await jsRP("id").getIdByLicense(ids.license);
    let p = {
      nId: userId,
      sId: player,
      license: ids.license,
      login: Date.now(),
    };
    add(userId, p);
    emitNet("jsrp-user:onLoad", player, p);
    /* emit to all */
    emit("jsrp-user:connect", p);
    emitNet("jsrp-user:connect", -1, p);
    /* -- */
    resolve(p);
  });
};

/*
  Handle new player
*/
on("respawnPlayerPedEvent", async (player, data) => register(player));

on("playerConnected", (userId) => {
  console.log("User connected " + userId);
});

on("playerDropped", async (reason) => {
  const player = global.source;
  const ids = jsRP().parseIdentifiers(player);
  let userId = await jsRP("id").getIdByLicense(ids.license);
  rm(userId);
  /* emit to all */
  emit("jsrp-user:disconnect", userId);
  emitNet("jsrp-user:disconnect", -1, userId);
});

onRequest(resource, "init", (player) => {
  register(player).then((pData) => {
    // console.log(pData);
    response(resource, "init", pData);
  });
});
