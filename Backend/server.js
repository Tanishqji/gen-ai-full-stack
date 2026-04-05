require("dotenv").config()
const app = require("./src/app")
const connectDB = require("./src/config/database")
//const { invokeGeminiAi } = require("./src/services/ai.services")
//const { generateInterviewReport } = require("./src/services/ai.services")
//const {resume, jobDescription, selfDescription} = require("./src/utils/sampleData") 

connectDB()
//invokeGeminiAi()
//generateInterviewReport({resume, jobDescription, selfDescription})

app.listen(5000, () => {
    console.log("server is running on port 5000");

})