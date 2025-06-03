const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
const registrationRoute = require('../routes/registration');
app.use('/api/registrations', registrationRoute);

app.get('/', (req, res)=>{
  res.send({
    activeStatus:true,
   error: false,
  })
});

// Export the handler for Vercel
const serverless = require('serverless-http');
module.exports = serverless(app);
