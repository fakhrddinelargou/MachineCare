const { createUser, findUserByEmail } = require('../repositories/UserRepository');
const { hashPassword, checkHashPassword } = require('./hashService');
const AppError = require('../utils/AppError');
const jwt = require('jsonwebtoken');




async function login(email, password) {

    const user = await findUserByEmail(email);
    if (!user) {
        throw new AppError('Email ou mot de passe incorrect', 401);
    }

    const isMatch = await checkHashPassword(password, user.password);

    if (!isMatch) {
        throw new AppError('Email ou mot de passe incorrect', 401);
    }

    const token = await generateToken(user);

    return {
        token: token,
        user: { id: user.id, full_name : user.full_name , email: user.email  }
    }


}



function generateToken(user) {
    return jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
    )
}


module.exports = { login }
