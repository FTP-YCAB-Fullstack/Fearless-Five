const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: ""
  },
  bio: {
    type: String,
    required: true,
    default: ""
  },
  address: {
    type: String,
    required: true,
    default: ""
  },
  industry: {
    type: String,
    required: true,
    default: ""
  },
  status: {
    type: String,
    required: true,
    default: ""
  },
  founder: {
    type: String,
    required: true,
    default: ""
  },
  founded: {
    type: String,
    required: true,
    default: ""
  },
  website: {
    type: String,
    required: true,
    default: ""
  },
  logo: {
    type: String,
    required: true,
    default: ""
  },
  sosial_media: {
    type: String,
    required: true,
    default: ""
  },
});

const Company = new mongoose.model("Company",CompanySchema)

module.exports = Company