log("[db] modules.register");

modules.register = sequelize.define("jsrp-register", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.STRING,
  },
  firstname: {
    type: DataTypes.STRING,
  },
  lastname: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  sex: {
    type: DataTypes.STRING,
  },
  appearance: {
    type: DataTypes.TEXT,
  },
});

const CreateUserRegister = async (userId, data) => {
  let cfg = data;
  cfg.userId = userId;
  let register = await modules.register.create(cfg);
  return register.dataValues || false;
};
exports("CreateUserRegister", CreateUserRegister);

const GetUserRegister = async (userId) => {
  let register = await modules.register.findAll({
    where: {
      userId,
    },
  });
  return register[0]?.dataValues || false;
};

exports("GetUserRegister", GetUserRegister);
