const passport = require('passport')

module.exports = (req , res , next) => {
    passport.authenticate('jwt' , (err , user , info) => {
        if(err) { 
            console.log(info)
            console.log(err)
            return next(err)
        }

        if(!user){
            return res.status(400).json({
                message : "Authenticate Failed"
            })
        }

        req.user  = user
        next()
    })(req , res , next)
}