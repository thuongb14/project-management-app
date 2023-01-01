const express = require('express');

const bcrypt = require('bcrypt');

const db = require('../database/db');

const router = express.Router();

function isValidPassword(plainTextPassword, passwordHash) {
  return bcrypt.compareSync(plainTextPassword, passwordHash);
}

router.post('/', (req, res) => {
  const { email, password } = req.body; 

  if (email == null || password == null) {
    return res.sendStatus(403);
  }
  db.query('SELECT * FROM users WHERE email = $1', [email]).then((data) => {
    if (data.rows.length === 0) {
      return res.status(403).json({
        message: "No user found"
      })
    }
    const user = data.rows[0];
    const matches = isValidPassword(password, data.rows[0].password);
    if (!matches) {
      return res.status(403).json({
        message: "Password not match"
      })
    }
    req.session.user = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    res.status(200);
    return res
      .json({
        user: req.session.user,
      })
  })

  .catch((e) => {
    console.log(e);
    return res.sendStatus(403);
  });
});

router.get('/', (req, res) => {
  const sql = 'SELECT * FROM session ORDER BY expire DESC';
  db.query(sql).then(({ rows }) => {
    res.json({
      session: rows,
    });
  });
});

router.delete('/', (req, res) => {
  req.session.destroy();
  res.json({
    message: 'Log out',
  });
});

module.exports = router;