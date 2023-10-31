//測試用DataBase
//const config = require('../config/development_config');
//正式
const config = require('../config/config');
const mysqlt = require("mysql");

const con = mysqlt.createPool({
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database
});

con.on("connection", connection => {
  console.log("Database connected!");

  connection.on("error", err => {
    console.log('connecting error',err.message);
    });

    connection.on("close", err => {
      console.log('DB',config.mysql.database,' connecting success');
    });
});


module.exports = con;