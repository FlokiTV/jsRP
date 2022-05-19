log("[db] modules.id");

modules.id = sequelize.define("jsrp-id", {
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
});
