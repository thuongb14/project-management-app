const express = require("express")
const bodyParser = require("body-parser")
const router = require("./controllers/router")

const app = express();

const PORT = 3000

app.use(express.static("static"));
app.use(bodyParser.json());

app.use('/', express.static('static')); // <--- base bath using files in static folders

app.use("/", router);




// app.get("/api/hello", (req, res) => {
//     res.json({status: "ok"})
// })

app.listen(PORT, () => {
    console.log(`Can connect on http://localhost:${PORT}`)
})