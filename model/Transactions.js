const moongose  = require('mongoose')
const Schema = moongose.Schema


const TransactionsSchema = new Schema({
    amount : {
        type : Number,
        required : true
    },

    type : {
        type : String,
        required : true
    },

    note : Text,
    author : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    }
}, {timestamps : true})

const Transactions = moongose.model('Transactions' , TransactionsSchema)
module.exports = Transactions