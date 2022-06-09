/// <reference types="@citizenfx/server" />
const DB = exports["jsrp-db"];
console.log("db");

// log to we console
const prettylog = (data) => {
  console.log(data);
  // try {
  //   exports["jsrp-ws"].prettylog("s", GetCurrentResourceName(), data);
  // } catch (error) {}
};

(async () => {
  const TableMoney = "jsrp-money";
  const TableHistory = "jsrp-money-history";
  /*
    Define jsrp-money table
  */
  prettylog("init db:" + TableMoney);
  await DB.define(TableMoney, {
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
  prettylog("init db:" + TableHistory);
  await DB.define(TableHistory, {
    userId: {
      type: "integer",
    },
    /*
      @enum
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

  let init = await DB.create(TableMoney, {
    userId: 1,
    wallet: 200,
    bank: 2000,
  });

  prettylog(init);
})();

const VerifyPlayerMoney = (userId) => {};
