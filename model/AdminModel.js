const mongoose = require ("mongoose")

const adminModel = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Admin",adminModel)