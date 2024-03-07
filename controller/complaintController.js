const ComplaintSchema = require ("../model/ComplaintModel")

const CreateComplaint = async (req,res) =>{
    const newData =  ComplaintSchema(req.body)
    const saveData = await newData.save()
    if(saveData){
       res.send(saveData)
}
}

const getComplaints = async (req,res) =>{
    const getComplaint = await ComplaintSchema.find()
    if(getComplaint){
        res.send(getComplaint)
    }
}

const deleteComplaint = async (req,res) =>{
    try{
        const deleteData = await ComplaintSchema.deleteOne(
            {_id: req.params.id}
     )
     if(deleteData){
         res.send("Deleted Data")
     }
    }catch(error){
        console.log(error)
    }
   
}

const getTotalComplaints = async (req,res) =>{
    const total = await ComplaintSchema.find().countDocuments()
    if(total){
      res.send({total})
    }
  }

module.exports = {CreateComplaint,getComplaints,getTotalComplaints,deleteComplaint}