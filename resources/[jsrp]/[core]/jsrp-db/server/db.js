/*
  Define and sync a new table model
  https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types
*/
const DB = {};

const runInSchema = (table, fn, args = {}) => {
  return CFG.schemas[table][fn](args);
};
/*
  Schemas
*/
async function setSchema(table, model) {
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
    if (temp.default) temp.defaultValue = temp.default;
    cfg[col] = { ...temp };
  });
  CFG.schemas[table] = await CFG.sequelize.define(table, cfg, { freezeTableName: true });
  await CFG.schemas[table].sync({ force: false }); // sync table with databse
  return CFG.schemas[table];
}
DB.setSchema = setSchema;

const getSchema = (table) => {
  return (fn, args = {}) => {
    return runInSchema(table, fn, args);
  };
  // return (fn, data) => {
  //   return CFG.schemas[table][fn](data);
  // };
};
DB.getSchema = getSchema;

const parse = (data) => {
  console.log(data);
  let parsed = false;
  if (typeof data == "array") {
    parsed = [];
    data.map((res) => {
      parsed.push(res);
    });
  } else parsed = data.dataValues || false;
};
DB.parse = parse;

const query = async (query) => {
  console.log(query);
  const [results, metadata] = await CFG.sequelize.query(query);
  return results;
};
DB.query = query;
/*
  each every DB key and set on jsRP module a new function

  const DB = {
    setSchema: ()=>{},
    getSchema: ()=>{},
    query: ()=>{},
  }

*/
//["setSchema", "getSchema", "query"]
jsRP.setObjectModule("DB", DB);
