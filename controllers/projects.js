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

router.put('/', (req, res) => {
  const { project_name, priority, projectid } = req.body;
  const sql = "UPDATE projects SET project_name = $1, priority = $2 WHERE projectid = $3";
  db.query(sql, [project_name, priority, projectid])
    .then(() => {
      console.log(sql)
      res.json({ status: "ok" });
    })
})

router.post('/', (req, res) => {
  console.log("Submit form");
  const {project_name, priority} = req.body 
  
  console.log(project_name);
  const sql = "INSERT INTO projects (project_name, priority) VALUES ($1, $2)";
  console.log(sql);
  db.query(sql, [project_name, priority])
    .then(() => {
      res.json({ status: "ok" });
    }).catch((err)=> {console.error(err)})
   
  
})

module.exports = router;
