const pg = require("pg")

const db = new pg.Pool({
    database: "project3_pma",
});

module.exports = db;