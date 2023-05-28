//測試用DataBase
//const config = require('../config/development_config');
//正式
const config = require('../config/config');
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
    console.log('DB',config.mysql.database,' connecting success');
  }
});

module.exports = connection;