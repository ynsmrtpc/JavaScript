const { JWT_COOKIE, NODE_ENV } = process.env

const sendJWTtoClient = (user, res) => {
    // Generate JWT
    const token = user.generateJWTFromUser()
    return res
        .status(200)
        .cookie("access token", token, {
            httpOnly: true,
            expires: new Date(Date.now() + parseInt(JWT_COOKIE) * 1000 * 60),
            secure: NODE_ENV === "DEV" ? false : true
        })
        .json({
            success: true,
            access_token: token,
            data: {
                name: user.name,
                email: user.email
            }
        })
}

const isTokenInclude = (req) => {
    return req.headers.authorization && req.headers.authorization.startsWith('Bearer:')
}

const getAccessTokenFromHeader = (req) => {
    const authorization = req.headers.authorization
    return authorization.split(" ")[1]
}

module.exports = {
    sendJWTtoClient,
    isTokenInclude,
    getAccessTokenFromHeader
};