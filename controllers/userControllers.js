const jwt = require('jsonwebtoken')
const registerValidator = require('../validator/registerValidator')
const loginValidator = require('../validator/loginValidator')
const User = require('../model/User')
const bcrypt  = require('bcryptjs')
const {serverError ,  resourceError} = require('../util/error')

module.exports = {

    login : (req , res) => {
        
        let {email , password} = req.body
        let validator =  loginValidator({email , password})
      
        if(!validator.isValid){
            return res.status(400).json(validator.error)
        }else {
            User.findOne({email})
            .then( user => {
              
                if(!user){
                    return resourceError(res , 'User Not found !')
                }

                bcrypt.compare(password, user.password, function(err, resutl) {
                   if(err){
                       return serverError(res , err)
                   }

                   if(!resutl){
                       return resourceError(res , 'Password doesn\'t matched.')
                   }

                   let token = jwt.sign({
                       _id : user.id,
                       name : user.name,
                       email :  user.email,
                       blance : user.blance,
                       income : user.income,
                       expense : user.expense,
                       transactions : user.transactions
                   }, 'SECRET', {expiresIn : '2h'})

                   res.status(200).json({
                       message : "login Successfull",
                       token : `Bearer ${token}`
                   })
                })


            })
            .catch(e => serverError(res ,  err))
        }


    },

    register : (req , res) => {
        let {name , email , password , confirmPassword} = req.body
        let validator = registerValidator( { name , email , password , confirmPassword } )
        if(!validator.isValid){
           return res.status(400).json(validator.error)
           
        }else {
            User.findOne({email})
            .then( user => {
                if(user){
                    return resourceError(res , 'Email Already Exist...!')
                }

               

                var hash = bcrypt.hashSync(password, 11);

                let userCreat = new User({
                    name : name,
                    email : email,
                    password : hash,
                    blance : 0,
                    income : 0,
                    expense : 0
                })

               userCreat.save()
                .then( user => {
                    return res.status(201).json({
                        message : "User Created Successfully",
                        user
                    })
                })
                .catch( error =>  serverError(res , error))

            })
            .catch( error => serverError(res , error))

        }
    },

    allUser : (req ,  res) => {
        User.find()
            .then( user => {
                res.status(200).json(user)
            })
            .catch(error => serverError(res , error))
    }
}