(async () => {
  await define("_teste", {
    name: {
      type: "string",
    },
    age: {
      type: "integer",
    },
  });

  let db = getModule("_teste");
})();
