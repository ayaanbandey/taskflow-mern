const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  sampleId: { type: String, unique: true },
  name: String,
  email: String,
  role: String,
  avatarInitials: String
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
