const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({

    username: {
        type: String,
        unique: [true, "username already taken"],
        required: true,
    },
    email: {
        type: String,
        unique: [true, "account already exist with the mail"],
        required: true,
    },
    password: {
        type: String,
        unique: true

    }



})

const User = mongoose.model("User", userSchema)

module.exports = User