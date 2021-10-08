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
      default: ""
  },
  location: {
      type: String,
      default: ""
  },
  jobTitle: {
      type: String,
      default: ""
  },
  jobStatus: {
      type: String,
      default: ""
  },
  citizen: {
      type: String,
      default: ""
  },
  nationality: {
      type: String,
      default: ""
  },
  summary: {
      type: String,
      default: ""
  },
  profile: {
      type: String,
      default: ""
  },
  skills: {
      type: Array,
      default: []
  },
  experience: {
      type: Array,
      default: []
  }
})

const User = mongoose.model('User', userSchema);

module.exports = User;