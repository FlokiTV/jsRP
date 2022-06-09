/*
  Define and sync a new table model
  https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types
*/
const DB = {};

const define = async (table, model) => {
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
  return CFG.modules[table];
};
exports("define", define);

const getModule = (table) => {
  return CFG.modules[table];
};
exports("getModule", getModule);

const query = async (query) => {
  prettylog("create");
  const [results, metadata] = await sequelize.query(query);
  return results;
};
DB.query = query;
exports("query", query);

const create = async (table, data) => {
  prettylog("create");
  const response = await CFG.modules[table].create(data);
  if (response.dataValues) return response.dataValues;
  else return false;
};
DB.create = create;
exports("create", create);

(async () => {
  await define("jsrp-data", {
    owner: {
      type: "string",
    },
    key: {
      type: "string",
    },
    value: {
      type: "text",
    },
  });
})();
