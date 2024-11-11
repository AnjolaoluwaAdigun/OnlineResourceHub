const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  file: { type: String, required: true },
  fileSize: { type: Number, required: true },
  uploader: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
});

const Resource = mongoose.model('Resource', resourceSchema);
module.exports = Resource;

