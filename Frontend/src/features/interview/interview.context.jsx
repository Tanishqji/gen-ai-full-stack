import { createContext } from "react";

export const InterviewContext = createContext({
    jobDescription : "",
    selfDescription : "",
    resumeFile : null,
    setJobDescription : () => {},
    setSelfDescription : () => {},
    setResumeFile : () => {}
})

export const InterviewProvider = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [report, setReport] = useState(null)
    const [reports, setReports] = useState([])

    return (
        <InterviewContext.Provider value={{loading, setLoading, report, setReport , reports, setReports}}>
            {children}
        </InterviewContext.Provider>
    )
}