const express =  require('express');
const router = express.Router();

const { create , get ,getByID} = require('../controllers/machineController');

//  MIDDLEWARE 
const authMiddleware = require('../middlewares/authMiddleware');


router.post('/create', authMiddleware , create)
router.get('/' , authMiddleware , get)
router.get('/:id' , authMiddleware , getByID)



module.exports = router