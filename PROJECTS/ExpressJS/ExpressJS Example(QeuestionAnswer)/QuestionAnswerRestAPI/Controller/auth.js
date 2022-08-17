const User = require("../Models/User")
const CustromError = require("../helpers/error/CustomError")
const asyncErrorWrapper = require("express-async-handler")
const { sendJWTtoClient } = require("../helpers/authorization/tokenHelpers")

const register = asyncErrorWrapper(async(req, res, next) => {
    const { name, email, password, role } = req.body;
    const user = await User.create({ name, email, password, role });
    sendJWTtoClient(user, res)
})

const getUser = (req, res, next) => {
    res.json({
        success: true,
        data: {
            id: req.user.id,
            name: req.user.name
        }
    })
}

module.exports = {
    register,
    getUser
}