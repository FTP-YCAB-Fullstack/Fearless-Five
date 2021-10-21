const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  email: {
      type: String,
      required: true,
      unique: true
  },
  password: {
      type: String,
      required: true
  },
  cv: {
      type: String,
      default: ""
  },
  phoneNumber: {
      type: String,
      default: "No Phone Number"
  },
  location: {
      type: String,
      default: "No Location"
  },
  jobTitle: {
      type: String,
      default: "No Job Title"
  },
  jobStatus: {
      type: String,
      default: "No Job Status"
  },
  summary: {
      type: String,
      default: "No Summary"
  },
  profile: {
      type: String,
      default: ""
  },
  role: {
      type: String,
      required: true,
      default: 'user'
  },
  workNow: {
    type: String,
    default: ""
  }
})

const User = mongoose.model('User', userSchema);

module.exports = User;