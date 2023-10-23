const user = require("../models/user.schema")

const findcookies = async (req, res, next) => {
    let { id } = req.cookies
    if (id) {
        let data = await user.findById(id)
        if (data.username == "node") {
            next()
        }
        else {
            res.send("error")
        }
    }
    else {
        res.redirect("/login")
    }
}

const isAuth = (req, res, next) => {
    if (req.user) {
        next()
    }
    else {
        res.redirect("/login")
    }
}

module.exports = { findcookies, isAuth }