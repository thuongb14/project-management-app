const express = require("express");

const router = express.Router();

const db = require("../database/db.js");

router.get('/', (req, res) => {
  const sql = `SELECT * FROM projects ORDER BY projectid`;
  db.query(sql).then(({ rows }) => {
    res.json({
      projects: rows,
    });
  });
});

router.patch('/', (req, res) => {
  const { project_name, priority, projectid } = req.body;
  console.log(req.body)
  const sql = "UPDATE projects SET project_name = $1, priority = $2 WHERE projectid = $3";
  db.query(sql, [project_name, priority, projectid])
    .then(() => {
      console.log(sql)
      res.json({ status: "ok" });
    })
})

router.post('/', (req, res) => {
  // console.log("Submit form");
  // console.log(req.body)
  const { project_name, priority, userId } = req.body

  // console.log(project_name);
  const sql = "INSERT INTO projects (project_name, priority, user_id) VALUES ($1, $2, $3)";
  // console.log(sql);
  db.query(sql, [project_name, priority, userId])
    .then(() => {
      res.json({ status: "ok" });
    }).catch((err) => { console.error(err) })
})

router.delete('/:id', (req, res) => {
  let id = req.params.id;
  const sql = "DELETE FROM projects WHERE projectid = $1";
  db.query(sql, [id])
    .then(() => {
      console.log(sql)
      res.json({ status: "ok" });
    })
})

module.exports = router;
