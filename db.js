const Pool = require("pg").Pool;

const pool = new Pool({
  user: "Amkam",
  password: "amkampgadmin",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;