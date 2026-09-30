const authService = require('../services/autService');
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new AppError('Email et password requis', 400);
  }

  const result = await authService.login(email, password);
  res.status(200).json(result);
});


module.exports = { login }

