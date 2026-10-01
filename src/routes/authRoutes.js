const express = require('express');
const router = express.Router();

// CONTROLLERS
const {login , register} = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

// MIDDLEWARE 
// router.use(authMiddleware)


router.post('/login',login);
router.post('/register' , authMiddleware , register)




module.exports = router;