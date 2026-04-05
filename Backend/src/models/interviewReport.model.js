const mongoose = require('mongoose');

const technicalQuestionSchema = new mongoose.Schema({
    question:{
        type: String,
        required: true
    },
    intention:{
        type: String,
        required: true
    },
    answer:{
        type: String,
        required: true
    }
},{
    _id: false
})

const behavioralQuestionSchema = new mongoose.Schema({
    question:{
        type: String,
        required: true
    },
    intention:{
        type: String,
        required: true
    },
    answer:{
        type: String,
        required: true
    }
},{
    _id: false
})

const skillsGapSchema = new mongoose.Schema({
    skill:{
        type: String,
        required: true
    },
    severity:{
        type: String,
        enum: ['Low', 'Medium', 'High'],
        required: true
    },
    description:{
        type: String,
        required: true
    }
},{
    _id: false
})

const presentationPlanSchema = new mongoose.Schema({
    days:{
        type: Number,
        required: true
    },
    focus:{
        type: String,
        required: true
    },
    tasks:{
        type: [String],
        required: true
    }
},{
    _id: false
})

const interviewReportSchema = new mongoose.Schema({

    jobDescription: {
        type: String,
        required: true
    },
    resume:{
        type: String,
    },
    selfDescription: {
        type: String,
    },
    matchScore: {
        type: Number,
        min: 0,
        max: 100,
    },
    technicalQuestions: [technicalQuestionSchema],
    behavioralQuestions: [behavioralQuestionSchema],
    skillsGap: [skillsGapSchema],
    presentationPlan: presentationPlanSchema,
    user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    }
       
},{
    timestamps: true
})

const InterviewReportModel = mongoose.model('InterviewReport', interviewReportSchema);

module.exports = InterviewReportModel;