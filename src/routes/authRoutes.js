const express = require('express');
const router = express.Router();

// CONTROLLERS
const {login} = require('../controllers/authController');
// const authMiddleware = require('../middlewares/authMiddleware');

// MIDDLEWARE 
// router.use(authMiddleware)

router.post('/login',login);




module.exports = router;