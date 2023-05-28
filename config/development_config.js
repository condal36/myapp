require('dotenv').config()

module.exports = {
    mysql: {
      host: process.env.DEVHOST,
      user: process.env.DEVDATABASE_USER,
      password: process.env.DEVDATABASE_PASSWORD,
      database: process.env.DEVDATABASE
    }
}