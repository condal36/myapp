// DataBase
const config = require('../config/development_config');
const mysqlt = require("mysql");

const connection = mysqlt.createConnection({
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database
});

connection.connect(err => {
  if (err) {
    //console.log('host:',config.mysql.host,'user:',config.mysql.user,'password:',config.mysql.password,'database:',config.mysql.database,'connecting error');
    console.log('connecting error',err.message);
  } else {
    console.log('connecting success');
  }
});

module.exports = connection;