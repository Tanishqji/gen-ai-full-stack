const pdfParse = require("pdf-parse")
const generateInterviewReport = require("../services/ai.services")
const interviewReportModel = require("../models/interviewReport.model")

async function generateInterviewReportController(req, res) {

    const resumeContent = await(new  pdfParse.PDFParse(Uint8Array.from(req.resumeFile.buffer))).getText()
    const {jobDescription, selfDescription} = req.body


    const interviewReport = await generateInterviewReport({
        resume: resumeContent.text,
                selfDescription,
                jobDescription
    })


    const interviewReportData = await interviewReportModel.create({
        jobDescription,
        resume: resumeContent.text,
        selfDescription,
        user: req.user._id,
        ...interviewReport
    })

    res.status(200).json({
        message: "Interview report generated successfully",
        interviewReport: interviewReportData
    })

}

async function getInterviewReportController(req, res) {

    const {interviewId} = req.params

    const interviewReport = await interviewReportModel.findOne({
        _id: interviewId,
        user: req.user._id
    })
    if(!interviewReport) {
        return res.status(404).json({
            message: "Interview report not found"
        })
    }

    res.status(200).json({
        message: "Interview report found",
        interviewReport
    })

}

async function getAllInterviewReportController(req, res) {

    const interviewReports = await interviewReportModel.find({
        user: req.user._id
    }).sort({createdAt: -1}).select("-resume -jobDescription -selfDescription -__v -technicalQuestions.answer -behavioralQuestions.answer -skillsGap.description -presentationPlan.tasks")
    res.status(200).json({
        message: "Interview reports found",
        interviewReports
    })  
}


module.exports = { generateInterviewReportController, getInterviewReportController, getAllInterviewReportController }