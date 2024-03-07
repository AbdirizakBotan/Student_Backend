const mongoose = require ("mongoose")

const studentSchema = mongoose.Schema({
    ID:{
        type:String,
        required: true
    },
    name:{
        type:String,
        required: true
    },
   className:{
    type:String,
    required: true
   },
   sub1:{
    type:Number,
    required: true
   },
   sub2:{
    type:Number,
    required: true
   },
   sub3:{
    type:Number,
    required: true
   },
   sub4:{
    type:Number,
    required: true
   }
},
{timestamps: true}
)

module.exports = mongoose.model("Examination",studentSchema)