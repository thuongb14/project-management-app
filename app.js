const express = require("express")
require("dotenv").config();

const db = require("./database/db") 
const bodyParser = require("body-parser")

const users = require("./controllers/users")
const session = require("./controllers/session")

const app = express();

const expressSession = require("express-session") 

const pgSession = require('connect-pg-simple')(expressSession)

const PORT = 3000

app.use(
    expressSession({
      store: new pgSession({
        pool: db, 
        createTableIfMissing: true
      }),
      secret: process.env.EXPRESS_SESSION_SECRET_KEY,
      resave: true,
      saveUninitialized: true 
    })
  )

app.use('/', express.static('static')); // <--- base bath using files in static folders

app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/session', session);

app.listen(PORT, () => {
    console.log(`Can connect on http://localhost:${PORT}`)
})