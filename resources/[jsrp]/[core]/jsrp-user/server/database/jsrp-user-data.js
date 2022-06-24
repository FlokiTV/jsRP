const dDB = jsRP("DB").getSchema("jsrp-user-data");
const DATA = {};

jsRP().DB.setSchema("jsrp-user-data", {
  nId: {
    type: "bigint",
  },
  key: {
    type: "text",
  },
  value: {
    type: "text",
  },
});

DATA.set = async (nId, key, value) => {
  let data = await dDB("create", {
    nId,
    key,
    value,
  });
  let user = jsRP("DB").parse(data); //get data.dataValues
  return user || false;
};

DATA.get = async (nId, key, multiple = false) => {
  let data = await dDB(multiple ? "find" : "findOne", {
    where: {
      nId,
      key,
    },
  });
  data = jsRP("DB").parse(data); //get data.dataValues
  return data || false;
};

DATA.find = async (key, value) => {
  let data = await dDB("find", {
    where: {
      key,
      value,
    },
  });
  data = jsRP("DB").parse(data); //get data.dataValues
  return data || false;
};

jsRP().setObjectModule("user-data", DATA);
