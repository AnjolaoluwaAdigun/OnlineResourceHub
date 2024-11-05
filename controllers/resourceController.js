const Resource = require('../models/resource');

exports.uploadResource = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Create new resource
    const newResource = new Resource({
      title,
      description,
      category,
      file: file.buffer.toString('base64'), // Store file as base64 for simplicity
      fileSize: file.size,
      uploader: req.student._id,
    });

    // Save resource to database
    await newResource.save();

    return res.json({ message: 'Resource uploaded successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error uploading resource' });
  }
};

