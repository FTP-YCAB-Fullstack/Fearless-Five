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
  citizen: {
      type: String,
      default: "No Citizen"
  },
  nationality: {
      type: String,
      default: "No Nationality"
  },
  summary: {
      type: String,
      default: "No Summary"
  },
  profile: {
      type: String,
      default: ""
  },
  skills: {
      type: [String],
      default: []
  },
  experience: {
      type: [
          {
              workPlace: {
                  type: String,
                  required: true
              },
              division: {
                  type: String,
                  required: true
              },
              startYear: {
                  type: Number,
                  required: true
              },
              endYear: {
                  type: Number,
                  required: true
              },
          }
      ],
      default: []
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