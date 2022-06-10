(async () => {
  console.log("-------------------");
  console.log("init database _teste");
  await define("_teste", {
    name: {
      type: "string",
    },
    age: {
      type: "integer",
    },
  });
  let db = getModule("_teste");
  console.log("create data on _teste");
  let data = await db.create({
    name: "teste",
    age: 66,
  });
  console.log("created data");
  console.log(data);
})();
