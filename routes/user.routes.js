const {Router}=require("express")
const { Home, signup, login, index, form, icon } = require("../controllers/user.controllers")
const router = Router()

router.get("/",Home)

router.post("/signup",signup)

router.post("/login",login)

router.get("/index",index)

router.get("/form",form)

router.get("/icon",icon)

module.exports=router
