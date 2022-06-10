/// <reference types="@citizenfx/server" />

const initDatabase = async () => {
  const TableMoney = "jsrp-money";
  const TableHistory = "jsrp-money-history";
  /*
    Define jsrp-money table
  */
  log("init db:" + TableMoney);
  await DB.setSchema(TableMoney, {
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
  log("init db:" + TableHistory);
  await DB.setSchema(TableHistory, {
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

  let schema = DB.getSchema(TableMoney);
  let data = await schema("create", { userId: 1, wallet: 200, bank: 2000 });
  let find = await schema("findAll");
  console.log(find);
  // sch("create", { userId: 1, wallet: 200, bank: 2000 });
};

initDatabase();
/*

  Work in progress

*/
const VerifyPlayerMoney = (userId) => {};
