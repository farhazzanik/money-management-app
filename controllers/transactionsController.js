const TransactionsModel = require('../model/Transactions')
const {serverError , resourceError} = require('../util/error')
const User = require('../model/User')

module.exports =  {
    create (req , res) {
        let { amount , type , note } = req.body
        let userId = req.user._id

        let transcation = new TransactionsModel({
            amount , type , note , author : userId
        })

        transcation.save()
        .then(trans => {
            let updateUser = { ... req.user._doc }
            if(type === "income"){
                updateUser.blance = updateUser.blance + amount
                updateUser.income = updateUser.income + amount
            }else if(type === "expense"){
                updateUser.blance = updateUser.blance - amount
                updateUser.expense = updateUser.expense + amount
            }
           
            updateUser.transactions.unshift(trans._id)
            User.findByIdAndUpdate(updateUser._id , {$set : updateUser},{new : true})
                .then(result => {
                    res.status(201).json({
                        message : "Transaction Created Successfully",
                        ... trans._doc,
                        user : result
                    })
                })
                .catch(error => serverError(res , error))

         
            
        })
        .catch( error => serverError(res , error) )
    },

    getAll(req , res ) {
         TransactionsModel.find()
         .then(transactions => {
             if(transactions.length === 0){
                resourceError(res , 'No transaction found !!')
             } else {
                res.status(200).json(transactions)
             }
         })
         .catch(error =>  serverError(res , error))
    },

    getSingleTransaction(req , res) {
        let { transactinId } = req.params
        TransactionsModel.findById(transactinId)
        .then(transaction => {
            if(!transaction){
                resourceError(res , 'No transaction found !!')
            }else {
                res.status(200).json(transaction)
            }
        })
        .catch( error => serverError(res , error))
    },

    updateTransaction(req , res) {
        let {transactinId} = req.params
        User.findByIdAndUpdate(transactinId , {$set : req.body})
            .then(result => {
                resourceError(res , 'Update Successfully ')
            
            })
            .catch(error => serverError(res , error))       
    },

    deleteTransaction(req , res) {
        let { transactinId } = req.params
        User.findByIdAndDelete(transactinId)
            .then( result => {
                resourceError(res , 'Deleted Successfully')
              
            })
            .catch( error => serverError(res , error))
    }
}