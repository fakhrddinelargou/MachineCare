const express =  require('express');
const router = express.Router();

const { create } = require('../controllers/machineController');

//  MIDDLEWARE 
const authMiddleware = require('../middlewares/authMiddleware');


router.post('/create', authMiddleware , create)




module.exports = router