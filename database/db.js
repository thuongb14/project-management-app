const pg = require("pg")

const db = new pg.Pool({
    // user: 'postgres',
    // password: 'mypassword',
    database: "project3_pma"
});

module.exports = db;