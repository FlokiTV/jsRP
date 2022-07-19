(() => {
  const db = jsRP("DB").getSchema("jsrp-user-data");
  const DATA = {};

  jsRP("DB").setSchema("jsrp-user-data", {
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
    let data = await db("create", {
      nId,
      key,
      value,
    });
    let user = jsRP("DB").parse(data); //get data.dataValues
    return user || false;
  };

  DATA.update = async (nId, key, value) => {
    let data = await db(
      "update",
      { value },
      {
        where: { nId, key },
      }
    );
    let user = jsRP("DB").parse(data); //get data.dataValues
    return user || false;
  };

  DATA.get = async (nId, key, multiple = false) => {
    let data = await db(multiple ? "find" : "findOne", {
      where: {
        nId,
        key,
      },
    });
    data = jsRP("DB").parse(data); //get data.dataValues
    return data || false;
  };

  DATA.destroy = async (nId, key) => {
    let data = await db("destroy", {
      where: {
        nId,
        key,
      },
    });
    data = jsRP("DB").parse(data); //get data.dataValues
    return data || false;
  };

  DATA.find = async (key, value) => {
    let data = await db("find", {
      where: {
        key,
        value,
      },
    });
    data = jsRP("DB").parse(data); //get data.dataValues
    return data || false;
  };
  jsRP().setObjectModule("user-data", DATA);
})();
