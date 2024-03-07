const adminModel = require ("../model/AdminModel")

//create Admin 

const createAdmin = async (req,res) =>{
   const newAdmin = adminModel (req.body)
   const saveAdmin = await newAdmin.save()

   if(saveAdmin){
    res.send(saveAdmin)
   }
}

// find existing user in the database
const loginAdmin = async (req,res) =>{
    const adminData = await adminModel.findOne({
        username: req.body.username,
        password: req.body.password
    })
    if(adminData){
        res.send(adminData)
    }
    else{
        res.send({
            error: "incorrect username or password"
        })
    }
}


module.exports = {createAdmin,loginAdmin}