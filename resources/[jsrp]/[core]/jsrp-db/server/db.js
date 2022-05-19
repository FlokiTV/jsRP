const init = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  await sequelize.sync({ force: false });
  console.log("All models were synchronized successfully.");
};

init();

// exports("define", async (table, model) => {
//   let cfg = {};
//   Object.keys(model).forEach((col) => {
//     cfg[col] = model[col];
//     cfg[col].type = DataTypes[cfg[col].type];
//   });

//   jsrp[table] = sequelize.define(table, {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     ...cfg,
//   });
//   await jsrp[table].sync({ force: true });
//   return jsrp[table];
// });

// exports("module", (table) => {
//   return jsrp[table];
// });

// exports("db", () => {
//   return jsrp;
// });
