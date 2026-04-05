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



module.exports = { generateInterviewReportController }