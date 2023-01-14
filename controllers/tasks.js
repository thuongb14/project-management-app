const express = require("express");

const router = express.Router();

const db = require("../database/db.js");

router.get('/', (req, res) => {
  const sql = `SELECT * FROM project_tasks ORDER BY tasksid DESC`;
  db.query(sql,).then(({ rows }) => {
    res.json({
      tasks: rows,
    });
  });
});

router.post('/', (req, res) => {
  const { project_id, task, status } = req.body;
  console.log(req.body)
  const sql ="INSERT INTO project_tasks (project_id, task, status) VALUES ($1, $2, $3)";
  console.log(sql)
  db.query(sql, [project_id, task, status])
    .then(() => {
      console.log(sql)
      res.json({ status: "ok" });
    })
})

router.patch('/', (req, res) => {
  const { task, status, tasksid } = req.body;
  const sql = "UPDATE project_tasks SET task = $1, status = $2 WHERE tasksid = $3";
  db.query(sql, [task, status, tasksid])
    .then(() => {
      console.log(sql)
      res.json({ status: "ok" });
    })
})

router.delete('/:id', (req, res) => {
  let id = req.params.id;
  const sql = "DELETE FROM project_tasks WHERE tasksid = $1";
  db.query(sql, [id])
    .then(() => {
      console.log(sql)
      res.json({ status: "ok" });
    })
})

router.delete('/projects/:id', (req, res) => {
  let id = req.params.id;
  const sql = "DELETE FROM project_tasks WHERE project_id = $1";
  db.query(sql, [id])
    .then(() => {
      console.log(sql)
      res.json({ status: "ok" });
    })
})


module.exports = router;

