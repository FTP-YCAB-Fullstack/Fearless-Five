const mongoose = require("mongoose");

const applySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    vacancyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vacancy',
        required: true
    },
    idPelamar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    emailHrd: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "Pending"
    }
})

const Apply = mongoose.model('Apply', applySchema);

module.exports = Apply;