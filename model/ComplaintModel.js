const mongoose = require ("mongoose")

const ComplaintSchema = mongoose.Schema({
    ID:{
        type:String,
        required: true
    },
    name:{
        type:String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
},
{timestamps: true})

module.exports = mongoose.model("complaint",ComplaintSchema)