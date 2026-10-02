const express = require('express');
const  router = express.Router();

// CONTROLLER
const { update, view } = require('../controllers/userController');

// MIDDLEWARE
const authMiddleware = require('../middlewares/authMiddleware');


router.patch('/me' , authMiddleware ,  update )
router.get('/me' , authMiddleware ,  view )

module.exports = router