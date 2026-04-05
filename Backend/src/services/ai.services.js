const { GoogleGenAI } = require  ("@google/genai");
const {z} = require("zod")
const  {zodToJsonSchema} = require("zod-to-json-schema");
const { describe } = require("zod/v4/core");

const genai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
});

async function invokeGeminiAi() {

    const response = await genai.models.generateContent({
        model: "gemini-1.5-pro",
        content: "hello gemini ! explain  the interview"
    })
    console.log(response.text);

}

const interviewReportSchema = z.object({
    matchScore: z.number().min(0).max(100).describe("The match score between the candidate and the job description"),   
   techinalQuestion: z.array(z.object({
       intention: z.string(),describe:("The intention behind asking the question"),
       question: z.string(),describe:("The question asked during the interview"),
    answer: z.string(),describe:("The candidate's answer to the question")
})),
behavioralQuestion: z.array(z.object({
    question: z.string(),describe:("The behavioral question asked during the interview"),
    intention: z.string(),describe:("The intention behind asking the behavioral question"),      
    answer: z.string(),describe:("The candidate's answer to the behavioral question")
})),
skillsGap: z.array(z.object({
    skill: z.string(),describe:("The skill that the candidate lacks"),
    severity: z.enum(['Low', 'Medium', 'High']),describe:("The severity of the skill gap"),  
    description: z.string(),describe:("A description of the skill gap")
})).describe("The skills gap identified for the candidate"),
presentationPlanSchema: z.object({
    days: z.number(),describe:("The number of days for the presentation plan"),
    focus: z.string(),describe:("The focus area for the presentation plan"),
    tasks: z.array(z.string()),describe:("The tasks to be completed in the presentation plan")
}).describe("The presentation plan for the candidate"),
  
   
})

async function generateInterviewReport({resume, jobDescription, selfDescription}) {

    const prompt = `Generate an interview report based on the following information:

                     Resume: ${resume}   
                     Job Description: ${jobDescription}
                   Self Description: ${selfDescription}
    `                    

 
    const reponse = await genai.models.generateContent({ 

         model: "gemini-2.5-flash",
         contents: "",
         config:{
            responseMimeType: "application/json",
            responseSchema: zodToJsonSchema(interviewReportSchema)
            }
            
            })
return JSON.parse(reponse.text);
}

module.exports = generateInterviewReport