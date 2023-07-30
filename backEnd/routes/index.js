const express = require('express');
const router = express.Router();


const authRoutes = require('./auth');

// public routes
authRoutes(router);




module.exports = router;
