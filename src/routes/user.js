const app = module.exports = require('express')();
const UserController = require('../controllers/user-controller');

app.get("/", (req, res) => {
  res.send({ "user": "Rupendra" });
});