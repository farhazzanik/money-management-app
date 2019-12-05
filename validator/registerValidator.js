const validator = require('validator')

const validate = user => {
    let error = {}

    if(!user.name) {
        error.name = 'Please Provide your name'
    }


    if(!user.email) {
        error.email = 'Please Provide your email'
    }else if(validator.isEmail('user.email')){
        error.email = 'Please Provide validate email'
    }   


    if(!user.password) {
        error.password = 'Please Provide your password'
    }else if(user.password.length < 6){
        error.password = 'Password must be contails at leas 6  character'
    }

    if(!user.confirmPassword){
        error.confirmPassword = "Please provide your confirmPassword"
    } else if(user.password !== user.confirmPassword){
        error.confirmPassword = "Confirm Password does not matched"
    }
    
   

    return {
        error,
        isValid : Object.keys(error).length == 0
    }

}

module.exports = validate