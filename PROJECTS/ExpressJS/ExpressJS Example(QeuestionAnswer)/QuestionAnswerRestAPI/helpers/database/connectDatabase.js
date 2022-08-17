const mongoose = require("mongoose")

const connectDatabase = () => {
        mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("MongoDB Connection Successful")
        })
        .catch(err => {
            console.log()
        })
}

module.exports = connectDatabase;