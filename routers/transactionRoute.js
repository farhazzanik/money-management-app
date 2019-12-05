const router = require('express').Router()
const {create , getAll , updateTransaction , deleteTransaction , getSingleTransaction} = require('../controllers/transactionsController')
const authenticate = require('../authenticate')

router.get('/',authenticate, getAll)

router.post('/',authenticate,create)

router.get('/:transactionId' , getSingleTransaction)


router.put('/:transactionId' , updateTransaction)


router.delete('/:transactonId' , deleteTransaction)

module.exports = router