const mongoose = require("mongoose");

const applySchema = new mongoose.Schema({
    companyId: {
        type: String,
        required: true
    },
    vacancyId: {
        type: String,
        required: true
    },
    emailPelamar: {
        type: String,
        required: true
    },
    namaPelamar: {
        type: String,
        required: true
    },
    emailHrd: {
        type: String,
        required: true
    },
    namaHrd: {
        type: String,
        required: true
    },
    cv: {
        type: String,
        // required: true,
        default: ""
    },
    status: {
        type: String,
        required: true,
        default: "Pending"
    }
})

const Apply = mongoose.model('Apply', applySchema);

module.exports = Apply;