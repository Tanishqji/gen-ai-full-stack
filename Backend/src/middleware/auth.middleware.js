const jwt = require("jsonwebtoken")
const BlacklistToken = require("../models/blacklist.model")

async function authUser(req, res, next) {

    const token = req.cookies.token
    if (!token) {
        return res.status(400).json({ message: "user not logged in" })
    }

    const isTokenBlacklisted = await BlacklistToken.findOne({ token })
    if (isTokenBlacklisted) {
        return res.status(400).json({ message: "invalid token" })
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