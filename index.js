const express = require('express');
const config = require('./config');
const routes = require('./src/routes');
const app = express();

require('./src/database/connection');

// console.log(process.env.NODE_ENV);


// const sql = require('mssql');
// const dbConfig = require('./src/config/database');

// sql
//   .connect(dbConfig)
//   .then(pool => {
//     return pool.request().query(`select * from Employees`);
//   })
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   })

// (async function () {
//   try {
//     console.log('Connect');
//     await sql.connect('mssql://sa:bhavana@2019@192.168.0.120/ManageSkills');
//     const result = await sql.query`select * from Employees`
//     console.dir(result)
//   } catch (err) {
//     console.log(err);
//   }
// })();




// // Routes
// app.use(routes);

// // app.get("/", (req, res) => {
// //   res.send("Hello World");
// // });

// app.listen(config.port, () => {
//   console.log(`App is listening on http://${config.host}:${config.port}`);
// });