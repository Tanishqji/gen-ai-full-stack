const mongoose = require("mongoose")

async function connectDB() {

    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connect to database");
    }
    catch (err) {
        console.log(err);

    }
}

module.exports = connectDB