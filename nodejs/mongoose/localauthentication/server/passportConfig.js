const LocalStrategy = require("passport-local").Strategy
const {User} = require("./database")
exports.inititalizePassport =(passport)=>{
    passport.use(new LocalStrategy(
        async function(username, password, done) {
         const user = await User.findOne({ username: username });
         if(!user) return done(null,false)
         if(user.password !== password) return done(null,false)
         return done(null,user);
        }
      ));
      passport.serializeUser((user,done)=>{
        done(null,user.id)
      })
      passport.deserializeUser(async(id,done)=>{
        const user = await User.findById(id)
        done(null,user)
      })
}
exports.isAuthenticated =(req,res,next)=>{
  if(req.user) return next()
  res.redirect("/login")
}