const express = require('express');
const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');
const authRoutes = require('./routes/authRoutes');

// Use the auth routes
app.use('/api/auth', authRoutes);

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Body parser
app.use(express.json());

// Database connection
const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING);

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to MunoWatch Backend');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
