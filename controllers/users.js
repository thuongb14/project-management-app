const express = require("express");

const bcrypt = require('bcrypt');

const router = express.Router();

const db = require("../database/db.js");

function generateHash(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}


router.get('/', (req, res) => {
  const sql = `SELECT * FROM users;`;
  db.query(sql).then(({ rows }) => {
    res.json({
      users: rows,
    });
  });
});

router.put("/", (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  const passwordHash = generateHash(password);
  const sql = "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)";
  console.log(sql);
  db.query(sql, [name, email, passwordHash])
    .then(() => {
      res.json({ status: "ok" });
    })
});

module.exports = router;
