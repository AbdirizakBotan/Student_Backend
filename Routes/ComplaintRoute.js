const express = require ("express")

const complaintController = require ("../controller/complaintController")

const router = express.Router()

router.post("/create/complaint",complaintController.CreateComplaint)
router.get("/read/complaint",complaintController.getComplaints)
router.delete("/delete/complaint/:id",complaintController.deleteComplaint)
router.get("/total/complaints",complaintController.getTotalComplaints)
module.exports= router