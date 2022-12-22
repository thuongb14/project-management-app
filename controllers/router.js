const express = require("express");
const path = require("path");

const router = express.Router();

const db = require("../database/db.js");

router.get("/", (req, res) => {
  res.json({ status: "ok" });
});

router.put("/sign-up", (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  const sql = "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)";
  console.log(sql);
  db.query(sql, [name, email, password])
    .then(({ rows }) => {
      res.json({ status: "ok" });
    })
    // .catch((err) => {
    //   console.log(err.response);
    // });
});

router.post("/log-in", (req, res) => {
  res.json({ status: "ok" });
});



module.exports = router;
