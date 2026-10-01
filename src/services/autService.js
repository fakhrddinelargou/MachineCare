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
        user: { id: user.id, full_name: user.full_name, email: user.email }
    }


}

async function registerUser(full_name, email, password) {
    const user = await findUserByEmail(email);
    if (user) {
        throw new AppError('Email is already existed', 409);
    }

    const passwordHash = await hashPassword(password);

    const create = await createUser({
        full_name: full_name,
        email: email,
        password: passwordHash
    });

    
    if (!create) {
        throw new AppError('something wrong', 400);
    }

    return {
        full_name: create.full_name,
        email: create.email,
    }


}


function generateToken(user) {
    return jwt.sign(
        { id: user.id, full_name : user.full_name  , email: user.email  },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
    )
}


module.exports = { login, registerUser }
