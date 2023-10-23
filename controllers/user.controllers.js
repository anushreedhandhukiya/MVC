const user = require("../models/user.schema")

const Home = (req, res) => {
    console.log(req.cookies);
    res.send("Welcome to the controllers")
}

const signup = async (req, res) => {
    try {
        let data = await user.findOne({ email: req.body.email })
        if (data) {
            return res.send("alread exits")
        }
        else {
            data = await user.create(req.body)
            return res.send(data)
        }
    }
    catch (error) {
        return res.send(error.message)
    }
}
const getlogin = (req, res) => {
    res.render("login")
}

const login = async (req, res) => {
    // try {
    //     const data = await user.findOne({ email: req.body.email })
    //     if (!data) {
    //         return res.send("user not found")
    //     }
    //     if (data.password != req.body.password) {
    //         return res.send("worng password")
    //     }
    //     return res.send("logged in")
    // }
    // catch (error) {
    //     return res.send(error.message)
    // }

    res.send("logged in")

}

const index = (req, res) => {
    res.cookie("name", "anu").render("index")
}

const form = (req, res) => {
    res.render("form")
}

const icon = (req, res) => {
    res.render("icon")
}

const profile = (req, res) => {
    if (req.user) {
        res.send(req.user)
    }
    else {
        res.redirect("/login")
    }
}

const removeuser = (req, res) => {
    req.logout((err) => {
        if (err) {
            console.log(err);
        }
        res.send("logout")
    })
}

module.exports = { Home, signup, login, index, form, icon, getlogin, profile, removeuser }