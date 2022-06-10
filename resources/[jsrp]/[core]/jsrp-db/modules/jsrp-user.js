log("[db] modules.user");

modules.user = CFG.sequelize.define("jsrp-user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  life: {
    type: DataTypes.BIGINT,
  },
  dead: {
    type: DataTypes.BIGINT,
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
  h: {
    type: DataTypes.BIGINT,
  },
  ip: {
    type: DataTypes.STRING,
  },
});
//
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

const SetUserDead = async (id, dead) => {
  return await modules.user.update(
    {
      dead,
    },
    {
      where: {
        id,
      },
    }
  );
};
exports("SetUserDead", SetUserDead);
