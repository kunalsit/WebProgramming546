const showRoute = require("./shows.js");
const searchRoute = require("./search.js");

const constructorMethod = app => {
  app.use("/", searchRoute);
  app.use("/shows", showRoute);
  app.use("/search", searchRoute);
  app.use("*", (req, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;
