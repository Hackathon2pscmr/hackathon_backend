const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const serverless = require('serverless-http');

// Don't use dotenv in Vercel — only for local dev
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use('/uploads', express.static(path.join(__dirname, '../uploads'))); // adjust path for Vercel

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  throw new Error("Missing MONGO_URI environment variable");
}

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
const registrationRoute = require('../routes/registration');
app.use('/api/registrations', registrationRoute);

// Root route
app.get('/', (req, res) => {
  res.json({
    activeStatus: true,
    error: false,
  });
});

module.exports = serverless(app);
