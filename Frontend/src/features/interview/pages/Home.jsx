import React,{useRef,useState} from "react";
import "../style/home.scss";
import { useInterview } from "../hooks/userinterview";
import { useNavigate } from "react-router-dom";


const Home = () => {

    const { generateReport, loading } = useInterview()
    const [jobDescription, setJobDescription] = useState("")
    const [selfDescription, setSelfDescription] = useState("")
    const [resumeFile, setResumeFile] = useState(null)

    const navigate = useNavigate()

        const handleGenerateReport = async () => {
            const resumeInput = resumeInputRef.current.files[0]
         const data=  await  generateReport({ jobDescription, selfDescription, resumeFile: resumeInput })
          navigate(`interview/${data.interviewId}`)
        }

  return (
        <main className="home-page"> 
            <div className="page-header">
                <h1>AI Interview Preparation</h1>
                <p>Get ready for your interview with AI-powered feedback</p>
            </div>

            <div className="interview-card">
                <div className="interview-card__body">
                    <div className="panel panel--left">
                        <div className="panel__header">
                            <h2>Job Description</h2>
                        </div>
                        <textarea className="panel__textarea" name="jobDescription" id="jobDescription" placeholder="Paste the job description here..."></textarea>
                    </div>

                    <div className="panel-divider"></div>

                    <div className="panel panel--right">
                        <div className="panel__header">
                            <h2>Your Information</h2>
                        </div>
                        
                        <div className="upload-section">
                            <label htmlFor="resume" className="section-label">Upload Resume</label>
                            <input type="file" id="resume" name="resume" accept=".pdf" />
                        </div>

                        <div className="upload-section">
                            <label htmlFor="selfDescription" className="section-label">Self Description</label>
                            <textarea className="panel__textarea panel__textarea--short" name="selfDescription" id="selfDescription" placeholder="Tell us about yourself..."></textarea>
                        </div>
                    </div>
                </div>

                <div className="interview-card__footer">
                    <span className="footer-info">All information is processed securely</span>
                    <button className="generate-btn">Start Interview</button>
                </div>
            </div>
        </main>
    );

};

export default Home;    