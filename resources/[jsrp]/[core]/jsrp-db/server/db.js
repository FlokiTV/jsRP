/*
  Define and sync a new table model
  https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types
*/
exports("define", async (table, model) => {
  let cfg = {
    // add a row id as primary key by default
    id: {
      type: getDataType("integer"),
      autoIncrement: true,
      primaryKey: true,
    },
  };
  // Process model types
  Object.keys(model).forEach((col) => {
    let temp = { ...model[col] };
    type = getDataType(temp.type);
    temp.type = type;
    cfg[col] = { ...temp };
  });
  CFG.modules[table] = await sequelize.define(table, cfg);
  await CFG.modules[table].sync({ force: false }); // sync table with databse
});

const Query = async (query) => {
  prettylog("create");
  const [results, metadata] = await sequelize.query(query);
  return results;
};
exports("query", Query);

const Create = async (table, data) => {
  prettylog("create");
  const response = await CFG.modules[table].create(data);
  if (response.dataValues) return response.dataValues;
  else return false;
};
exports("create", Create);
