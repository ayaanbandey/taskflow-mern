const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  sampleId: { type: Number, index: true },
  name: { type: String, required: true },
  description: String,
  priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Low' },
  dueDate: Date,
  progress: { type: Number, min: 0, max: 100, default: 0 },
  detailedStatus: String,
  simpleStatus: String
}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);
