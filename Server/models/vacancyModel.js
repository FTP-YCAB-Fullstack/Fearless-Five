const mongoose = require('mongoose');

const vacancySchema = new mongoose.Schema({
    companyId: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true
    },
    job_description: {
        type: String,
        required: true
    },
    hrdId: {
        type: String,
        required: true
    },
    rangeSalary: {
        type: Number,
        required: true
    },
    responsibility: {
        type: [String],
        required: true
    },
    requirements: {
        type: [String],
        required: true
    },
    benefit: {
        type: [String],
        required: true
    },
    mandatorySkills: {
        type: [String],
        required: true
    },
    goodToHave: {
        type: [String],
        default: []
    },
    workNow: {
        type: String,
        default: ""
    }
});

const Vacancy = mongoose.model('Vacancy', vacancySchema);

module.exports = Vacancy;