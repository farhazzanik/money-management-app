
module.exports = {

    serverError : (res , err) => {
        res.status(500).json({
            message : "Server Error Occured"
        })
    },

    resourceError : (res, message) => {
        res.status(400).json({
            message
        })
    }
} 