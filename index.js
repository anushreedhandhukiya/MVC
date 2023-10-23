const express = require("express");
const cookie = require("cookie-parser")
const session = require("express-session")
const passport = require("passport")

const connection = require("./config/db");
const router = require("./routes/user.routes");
const localAuth = require("./helper/local");

const app = express()
app.use(express.json())
app.use(cookie())
app.use(session({secret:"private-key"}))
app.use(express.urlencoded({extended:true}))
app.use(passport.initialize())
app.use(passport.session())
localAuth(passport)

app.set("view engine", "ejs")
app.set("views", __dirname + "/view")
app.use(express.static(__dirname + "/public"))

app.use(router)

app.listen(8090, () => {
    console.log("listing port 8090");
    connection()
})