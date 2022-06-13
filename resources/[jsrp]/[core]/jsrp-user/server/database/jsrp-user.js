const schemaName = "jsrp-user";
const db = jsRP().DB.getSchema(schemaName);
const USER = {};

jsRP().DB.setSchema(schemaName, {
  name: {
    type: "STRING",
  },
  life: {
    type: "BIGINT",
    default: 300,
  },
  dead: {
    type: "BIGINT",
  },
  x: {
    type: "BIGINT",
  },
  y: {
    type: "BIGINT",
  },
  z: {
    type: "BIGINT",
  },
  h: {
    type: "BIGINT",
  },
  ip: {
    type: "STRING",
  },
});

const create = async (name, licenses) => {
  let user = await db("create", {
    name,
    ip: licenses.ip || 0,
  });
  Object.keys(licenses).forEach(async (lsc) => {
    await jsRP().id.create(user.id, lsc, licenses[lsc]);
  });
  return user.dataValues || false;
};
USER.create = create;

jsRP().setObjectModule("user", USER);
