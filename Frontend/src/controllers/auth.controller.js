const UserModel = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const BlacklistToken = require("../models/blacklist.model")

async function registerUserController(req, res) {
    const { username, email, password } = req.body

    if (!username || !email || !password) {
        return res.status(400).json({ message: "all fields are required" })
    }
    const isUserAlreadyExist = await UserModel.findOne({
        $or: [{ username }, { email }]
    })
    if (isUserAlreadyExist) {
        return res.status(400).json({ message: "user already exist" })
    }

    const hash = await bcrypt.hash(password, 10)
    const user = await UserModel.create({
        username,
        email,
        password: hash
    })

    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    )

    res.cookie("token", token)

    res.status(201).json({
        message: "user registered successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    })

}

async function loginUserController(req, res) {
    const { email, password } = req.body

    const user = await UserModel.findOne({ email })
    if (!user) {
        return res.status(400).json({ message: "user not found" })
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
        return res.status(400).json({ message: "invalid password" })
    }
    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    )


    res.cookie("token", token)
    res.status(200).json({
        message: "user logged in successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    })


}

async function logoutUserController(req, res) {
    const token = req.cookies.token
    if (!token) {
        return res.status(400).json({ message: "user not logged in" })
    }
    const blacklistToken = await BlacklistToken.create({
        token
    })
    res.clearCookie("token")
    res.status(200).json({
        message: "user logged out successfully"
    })
}

async function getMeController(req, res) {
    const user = req.user
    return res.status(200).json({
        message: "user fetched successfully",
        user
    })
}

module.exports = {
    registerUserController,
    loginUserController,
    logoutUserController
}