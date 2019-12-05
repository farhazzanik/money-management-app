const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const jsonServer = require('json-server')
const passport = require('passport')



const app = express()
app.use(morgan('dev'))
app.use(cors())


app.use(bodyParser.urlencoded({ extended : false }))
app.use(bodyParser.json())
app.use(jsonServer.defaults())
app.use(passport.initialize())
require('./passport')(passport)


app.use('/api/users' , require('./routers/userRoute'))
app.use('/api/transactions' , require('./routers/transactionRoute'))


app.get('/', (req, res) => {
		res.json({
			message : "Welcome to our application"
		})

})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
    mongoose.connect('mongodb://localhost:27017/money-management-app', 
    	{useNewUrlParser: true} , () => {
    	console.log('database connected...')
    });

})