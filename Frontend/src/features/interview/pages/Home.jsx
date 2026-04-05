import React from "react";

const Home = () => {
  return (
        <main> 
            <div className="interView-input-group">

         <div className="left">
         <textarea name="jobDescription" id="jobDescription" placeholder="enter job desc"></textarea>
         </div>


         <div className="right">
            <div className="input-group">
                <label htmlFor="resume">Upload Resume</label>
                <input type="file" id="resume" name="resume" accept=".pdf" />
            </div>
            <div className="input-group">
                <label htmlFor="selfDescription">Self Description</label>
                <textarea name="selfDescription" id="selfDescription" placeholder="enter self description"></textarea>
            </div>
            <button className="submit-btn">Submit</button>
         </div>

            </div>
        </main>
    );

};

export default Home;    