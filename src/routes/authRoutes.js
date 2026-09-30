const express = require('express');
const router = express.Router();

// CONTROLLERS
const {login} = require('../controllers/authController');


router.post('/login',login);




module.exports = router;