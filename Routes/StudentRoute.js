const express = require ("express")
const studentController = require("../controller/studentController")

const router = express.Router()

router.post("/create/student",studentController.createStudent)
router.get("/read/data",studentController.getStudents)
router.get("/read/single/:id",studentController.getSingleData)
router.put("/update/student/:id",studentController.updateStudents)
router.delete("/delete/:id",studentController.deleteStudent )
router.post("/search/frontend",studentController.searchStudentFrontend)
router.get("/search/Student/:key",studentController.searchStudent)
router.get("/total/students",studentController.getTotalOfStudents)
router.get("/marks/total/:id",studentController.getTotalMarks)
module.exports = router