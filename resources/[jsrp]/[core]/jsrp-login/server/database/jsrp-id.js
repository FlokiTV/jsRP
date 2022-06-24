const schemaName = "jsrp-id";
const db = jsRP("DB").getSchema(schemaName);
const ID = {};

/*
  Set schema and create a new databse table
*/
jsRP("DB").setSchema(schemaName, {
  userId: {
    type: "INTEGER",
  },
  type: {
    type: "STRING",
  },
  value: {
    type: "STRING",
  },
});

const getIdByLicense = async (license) => {
  console.log("getIdByLicense " + license);
  let user = await db("findOne", {
    where: {
      type: "license",
      value: license,
    },
  });
  user = jsRP("DB").parse(user);
  let userId = user.userId || false;
  return userId;
};
ID.getIdByLicense = getIdByLicense;

const nId = async (player) => {
  const ids = jsRP().parseIdentifiers(player);
  const nId = await getIdByLicense(ids.license);
  return nId;
};
ID.nId = nId;

const create = async (userId, type, value) => {
  let id = await db("create", { userId, type, value });
  return id;
};
ID.create = create;

jsRP().setObjectModule("id", ID);
