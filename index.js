const express = require("express");
const connection = require("./config/db");
const router = require("./routes/user.routes");
const app = express()
app.use(express.json())

app.set("view engine", "ejs")
app.set("views", __dirname + "/view")
app.use(express.static(__dirname + "/public"))

app.use(router)

app.listen(8090, () => {
    console.log("listing port 8090");
    connection()
})