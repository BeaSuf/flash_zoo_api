const pg = require("pg");
require('dotenv').config()

let pool

if (process.env.PRODUCTION) {
  pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
} else {
  pool = new pg.Pool({ database: process.env.DATABASE });
}

module.exports = {
  query: (sql, params) => {
    return pool.query(sql, params);
  }
};
