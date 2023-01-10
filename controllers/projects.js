const express = require("express");

const router = express.Router();

const db = require("../database/db.js");

router.get('/', (req, res) => {
  const sql = `SELECT * FROM projects`;
  db.query(sql).then(({ rows }) => {
    res.json({
      projects: rows,
    });
  });
});

module.exports = router;
