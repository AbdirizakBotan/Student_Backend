const express = require ("express")
const adminController = require ("../controller/AdminController")


const router = express.Router()

router.post("/create/admin", adminController.createAdmin)
router.post("/login/admin",adminController.loginAdmin)

module.exports = router