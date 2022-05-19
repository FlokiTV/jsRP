log("[db] modules.user");

modules.user = sequelize.define("jsrp-user", {
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
});

const GetUserIdByLicense = async (license) => {
  let userId = await modules.id.findAll({
    where: {
      type: "license",
      value: license,
    },
  });
  userId = userId[0] || false;
  if (userId) {
    return userId.userId;
  } else {
    return userId;
  }
};
exports("GetUserIdByLicense", GetUserIdByLicense);
//
const GetUserById = async (id) => {
  let user = await modules.user.findAll({
    where: {
      id,
    },
  });
  return user[0].dataValues || false;
};
exports("GetUserById", GetUserById);
//
const CreateUser = async (name, licenses) => {
  let user = await modules.user.create({
    name,
    ip: licenses.ip || 0,
  });
  Object.keys(licenses).forEach(async (lsc) => {
    await modules.id.create({
      userId: user.id,
      type: lsc,
      value: licenses[lsc],
    });
  });

  return user.dataValues || false;
};
exports("CreateUser", CreateUser);
//
const UpdateUserPosition = async (id, pos) => {
  return await modules.user.update(pos, {
    where: {
      id,
    },
  });
};
exports("UpdateUserPosition", UpdateUserPosition);