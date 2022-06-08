/// <reference types="@citizenfx/server" />
const DB = exports["jsrp-db"];
console.log("db");

// log to we console
const prettylog = (data) => {
  try {
    exports["jsrp-ws"].prettylog("s", GetCurrentResourceName(), data);
  } catch (error) {
    console.log(data);
  }
};

(async () => {
  const TableNameMoney = "jsrp-money";
  const TableNameHistory = "jsrp-money-history";
  /*
    Define jsrp-money table
  */
  prettylog("init db:" + TableNameMoney);
  await DB.define(TableNameMoney, {
    userId: {
      type: "integer",
    },
    wallet: {
      type: "integer",
    },
    bank: {
      type: "integer",
    },
  });
  /*
    Define jsrp-money-history table
  */
  prettylog("init db:" + TableNameHistory);
  await DB.define(TableNameHistory, {
    userId: {
      type: "integer",
    },
    /*
        withdraw
        deposit
        transference
    */
    type: {
      type: "string",
    },
    value: {
      type: "integer",
    },
    /*
        transfer to ID
    */
    toId: {
      type: "integer",
      defaultValue: 0,
    },
  });
})();

const VerifyPlayerMoney = (userId) => {};
