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
  let query = DB.getSchema(TableMoney);
  // run "create" method from sequelize
  let data = await query("create", { userId: 1, wallet: 200, bank: 2000 });
  // run "findAll" method from sequelize
  let find = await query("findAll");
  // print on console the results
  console.log(find);
  // run mysql raw query
  let q = await DB.query("SELECT * FROM `jsrp-money`");
  console.log(q);
})();

/*

  Work in progress

*/
const VerifyPlayerMoney = async (userId) => {
  log(`Check if player [${userId}] has bank account`);
  let find = await query("findOne", { where: { userId } });
  log(find);
  return find;
};
