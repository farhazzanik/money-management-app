const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },

    email : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true
    },

    blance : Number,
    income : Number,
    expense : Number,
    transactions : {
        type : [{
            type : Schema.Types.ObjectId,
            ref : 'Transactions'
        }]
    }
})


const User = mongoose.model('User' , userSchema)
module.exports = User