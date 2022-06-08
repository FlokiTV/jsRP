/// <reference types="@citizenfx/server" />
const DB = exports["jsrp-db"];
const Resource = GetCurrentResourceName();

const CFG = {
  db: false,
};

const prettylog = (data) => {
  try {
    exports["jsrp-ws"].prettylog("s", GetCurrentResourceName(), data);
  } catch (error) {
    console.log(data);
  }
};

(async () => {
  prettylog("init db:jsrp-test");
  await DB.define("jsrp-test", {
    name: {
      type: "string",
      teste: true,
    },
    age: {
      type: "integer",
    },
  });
  let data = await DB.create("jsrp-test", { name: "Floki", age: 10 });
  prettylog(data);
})();
