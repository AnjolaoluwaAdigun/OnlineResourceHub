import express from 'express';
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const studentRoutes = require('./routes/studentRoutes');
const resourceRoutes = require('./routes/resourceRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/students', studentRoutes);
app.use('/api/resources', resourceRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost/babcock-students', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

  export default app;
