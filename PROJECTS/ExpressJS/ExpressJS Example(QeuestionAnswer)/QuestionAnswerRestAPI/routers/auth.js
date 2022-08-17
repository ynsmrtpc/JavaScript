// ...api/auth
// ...api/auth/register

const express = require("express")
const router = express.Router()
const { register, getUser } = require("../Controller/auth")
const { getAccessToRoute } = require('../Middlewares/authorization/auth')

router.post("/register", register)
router.get("/profile", getAccessToRoute, getUser)
module.exports = router;