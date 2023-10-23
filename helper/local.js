const localStrategy = require("passport-local").Strategy
const user = require("../models/user.schema")

const localAuth = (passport)=>{
    passport.use(new localStrategy(async(username,password,done)=>{
        let User = await user.findOne({username : username})
        if(!User){
            return done(null,false)
        }
        if(User.password != password){
            return done(null,false)
        }
        return done(null,User)
    }))
    passport.serializeUser((user,done)=>{
        return done(null,user.id)
    })
    passport.deserializeUser(async(id,done)=>{
        let User = await user.findById(id)
        return done(null,User)
    })
}
module.exports=localAuth