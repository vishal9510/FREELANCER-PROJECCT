const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  client: { type: String, required: true },
  budget: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'active', 'completed'], default: 'pending' },
  startDate: { type: Date, default: Date.now },
  endDate: Date,
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
