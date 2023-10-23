const {Router}=require("express")
const passport = require("passport")
const { Home, signup, login, index, form, icon, getlogin, profile, removeuser } = require("../controllers/user.controllers")
const router = Router()

router.get("/",Home)
router.post("/signup",signup)
router.post("/login",passport.authenticate("local",{successRedirect:"/index",failureRedirect:"/login"}))
router.get("/login",getlogin)
router.get("/index",index)
router.get("/form",form)
router.get("/icon",icon)
router.get("/profile",profile)
router.get("/logout",removeuser)

module.exports=router
