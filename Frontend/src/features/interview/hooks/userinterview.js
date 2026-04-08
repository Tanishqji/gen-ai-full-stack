import { response } from "../../../../../Backend/src/app";
import { generateInterviewReport,getAllInterviewsReports,getInterviewReportById } from "../sevices/interview.api";
import { useContext } from "react";

export const useInterview = () => {
    const context = useContext(InterviewContext);

    if(!context){
        throw new Error("useInterview must be used within an InterviewProvider")
    }

    const {loading, setLoading, report, setReport , reports, setReports} = context

    const generateReport = async ({jobDescription, selfDescription,resumeFile}) => {
        setLoading(true)
        try {
            const data = await generateInterviewReport({jobDescription, selfDescription,resumeFile})
            setReport(data)
        } catch (error) {
            console.error("Error generating interview report", error)
        } finally {
            setLoading(false)
        }
    }

    const getReportById = async (interviewId) => {
        setLoading(true)
        try {
            const data = await getInterviewReportById(interviewId)
            setReport(response.interviewReport)
        } catch (error) {
            console.error("Error fetching interview report", error)
        } finally {
            setLoading(false)
        }
    }

    const getReports = async () => {
        setLoading(true)
        try {
            const data = await getAllInterviewsReports()
            setReports(data.interviewReports)
        } catch (error) {
            console.error("Error fetching interview reports", error)
        } finally {
            setLoading(false)
        }   
    }

    return { generateReport, getReportById, getReports , loading, report, reports }

}