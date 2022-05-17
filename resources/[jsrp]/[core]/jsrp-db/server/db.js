const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("database", "username", "password", {
  host: "mysql.host.com",
  dialect: "mysql",
  logging: false,
});

const jsrp = {
  id: sequelize.define("jsrp-id", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.STRING,
    },
    value: {
      type: DataTypes.STRING,
    },
  }),
  user: sequelize.define("jsrp-user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    x: {
      type: DataTypes.BIGINT,
    },
    y: {
      type: DataTypes.BIGINT,
    },
    z: {
      type: DataTypes.BIGINT,
    },
    ip: {
      type: DataTypes.STRING,
    },
  }),
};

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

exports("model", (key, cb) => {
  return cb(jsrp[key]);
});

exports("db", () => {
  return jsrp;
});

exports("getUserByLicense", async (license) => {
  let userId = await jsrp.id.findAll({
    where: {
      type: "license",
      value: license,
    },
  });
  console.log("getUserByLicense", userId);
  userId = userId[0] || false;
  if (userId) {
    return userId.userId;
  } else {
    return userId;
  }
});
exports("getUser", async (id) => {
  let user = await jsrp.user.findAll({
    where: {
      id,
    },
  });
  return user[0].dataValues || false;
});
exports("createUser", async (name, licenses) => {
  let user = await jsrp.user.create({
    name,
    ip: licenses.ip || 0,
  });
  Object.keys(licenses).forEach(async (lsc) => {
    await jsrp.id.create({
      userId: user.id,
      type: lsc,
      value: licenses[lsc],
    });
  });

  return user;
});
exports("updateUserPos", async (id, pos) => {
  return await jsrp.user.update(pos, {
    where: {
      id,
    },
  });
});
