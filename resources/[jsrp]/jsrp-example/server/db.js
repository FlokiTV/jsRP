/// <reference types="@citizenfx/server" />

/*

  To init database tables you'll need use a async function

*/
const TableMoney = "jsrp-money";
const TableHistory = "jsrp-money-history";

const initDatabase = async () => {
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
};
// run and execute function async
initDatabase();

/*

  Working with Sequelize

*/
(async () => {
  // get sequelize helper function
  let schema = DB.getSchema(TableMoney);
  // run "create" method from sequelize
  let data = await schema("create", { userId: 1, wallet: 200, bank: 2000 });
  // run "findAll" method from sequelize
  let find = await schema("findAll", { where: { id: 2 } });
  // print on console the results
  console.log(find);
})();

/*

  Work in progress

*/
const VerifyPlayerMoney = (userId) => {};
