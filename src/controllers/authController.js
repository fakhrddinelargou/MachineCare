const authService = require('../services/autService');
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');
const { registerSchema, loginSchema } = require('../verification/authVerification');



const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const validate = loginSchema.safeParse(req.body);


  if(!validate.success){
    throw new AppError(validate.error.issues?.[0]?.message , 400);
  }

  if (!email || !password) {
    throw new AppError('Email et password requis', 400);
  }

  const result = await authService.login(email, password);
  res.status(200).json(result);
  
});


const register = asyncHandler(async (req, res) => {
  const { full_name, email, password } = req.body;

  const validate = registerSchema.safeParse(req.body);

  
  if (!validate.success) {
    
    // FOR CHECKING WHERE IS ISSUES EXACTLY console.log(validate.error.issues?.[0]?.message);
    throw new AppError(validate.error.issues?.[0]?.message , 400);
  }

  const create = await authService.registerUser(full_name, email, password);

  if (!create) {
    throw new AppError('something wrong', 400);
  }
  return res.status(201).json({ status : 'success' ,  user : create });

})

module.exports = { login, register }

