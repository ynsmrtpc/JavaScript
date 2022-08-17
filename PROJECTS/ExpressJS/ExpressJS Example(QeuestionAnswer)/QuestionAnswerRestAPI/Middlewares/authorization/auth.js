const CustomError = require('../../helpers/error/CustomError')
const jwt = require("jsonwebtoken")
const { isTokenInclude, getAccessTokenFromHeader } = require("../../helpers/authorization/tokenHelpers");
const { JWT_SECRET_KEY } = process.env

const getAccessToRoute = (req, res, next) => {
    if (!isTokenInclude(req)) {
        // 401 - unauthorized (giriş yapmadan girmeye çalışmak)
        // 403 - forbidden (erişim olmayan yere girmeye çalışmak)
        return next(new CustomError("You are not authorized to access this route.", 401))
    }
    const accessToken = getAccessTokenFromHeader(req)

    jwt.verify(accessToken, JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return next(new CustomError("You are not authorized to access this route.", 401));
        }
        req.user = {
            id: decoded.id,
            name: decoded.name
        }
        console.log(decoded)
        next();
    });
};
module.exports = {
    getAccessToRoute
}