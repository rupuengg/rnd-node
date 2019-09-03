const user = require("./user");
const config = require('../../config');
const app = module.exports = require('express')();

app.get("/", (req, res) => {
  res.send({ msg: `App is listening on http://${config.host}:${config.port}` });
});

app.use("/user", user);