const express = require('express');
const router = express.Router();

// CONTROLLERS
const {login , register} = require('../controllers/authController');
// MIDDLEWARE 
const authMiddleware = require('../middlewares/authMiddleware');




router.post('/login',login);
router.post('/register' , authMiddleware , register)




module.exports = router;