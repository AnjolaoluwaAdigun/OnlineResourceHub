const express = require('express');
const multer = require('multer');
const resourceController = require('../controllers/resourceController');
const authenticateToken = require('../middlewares/auth');

const router = express.Router();
const upload = multer({ 
  limits: { fileSize: 10485760 }, // 10MB limit
  storage: multer.memoryStorage() 
});

router.post('/upload-resource', authenticateToken, upload.single('file'), resourceController.uploadResource);

module.exports = router;
