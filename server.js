const express = require ("express")
const mongoose = require ("mongoose")
const cors = require ("cors")
const app = express()
app.use(cors())
app.use(express.json())
 const studentRoute = require ("./Routes/StudentRoute")
 const complaintRoute = require ("./Routes/ComplaintRoute")
 const adminRoute = require("./Routes/AdminRoute")

app.use(studentRoute)
app.use(complaintRoute)
app.use(adminRoute)
mongoose.connect("mongodb+srv://muniishyare143:12345@cluster0.ap9zowr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/StudentComplaints").then(()=>{
    console.log("Database Connected SuccessFully")
}).catch((error)=> console.log(error))

app.listen(9000, ()=>{
    console.log("Server Is Running On Port 9000")
})