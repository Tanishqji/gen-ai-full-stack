const jwt = require("jsonwebtoken")

function authUser(req, res, next) {

    const token = req.cookies.token
    if (!token) {
        return res.status(400).json({ message: "user not logged in" })
    }

    try {

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decodedToken
        next()
    }
    catch (err) {
        return res.status(400).json({ message: "invalid token" })
    }

}
module.exports = { authUser }