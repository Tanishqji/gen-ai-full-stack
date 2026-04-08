const express = require("express")
const authMiddleware = require("../middleware/auth.middleware")
const interViewController = require("../controllers/interView.controller")
const upload = require("../middleware/interView.middleware")

const interviewRouter = express.Router()


interviewRouter.post("/", authMiddleware.authUser,upload.single("resume"), interViewController.generateInterviewReportController)  


interviewRouter.get("/report/:interviewId", authMiddleware.authUser, interViewController.getInterviewReportController)

interviewRouter.get("/", authMiddleware.authUser, interViewController.getAllInterviewReportController)


module.exports = interviewRouter