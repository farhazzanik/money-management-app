const route = require('express')
const {create , getAll , updateTransaction , deleteTransaction , getSingleTransaction} = require('../controllers/transactionsController')

route.get('/' , getAll)

route.post('/' , create)

route.get('/:transactionId' , getSingleTransaction)


route.put('/:transactionId' , updateTransaction)


route.delete('/:transactonId' , deleteTransaction)

module.exports = route