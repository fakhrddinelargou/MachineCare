const express = require('express');
const router = express.Router();
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');
const authMiddleware = require('../middlewares/authMiddleware');


router.use(authMiddleware)

router.get('/error-404', asyncHandler(async (req, res) => {
  throw new AppError("Ressource introuvable", 404);
}));

router.get('/error-500', asyncHandler(async (req, res) => {
  throw new Error("Erreur inattendue"); 
}));

router.get('/error-async', asyncHandler(async (req, res) => {
  await Promise.reject(new AppError("Erreur async", 400));
}));

router.get('/test-middleware' , (req,res)=>{
  res.json({name : "fakhreddine largou" , user : req.user})
})



module.exports = router;