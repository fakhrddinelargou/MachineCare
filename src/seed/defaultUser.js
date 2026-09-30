const { hash } = require('bcrypt');
const User = require('../repositories/UserRepository');
// const bcrypt = require('bcryptjs');


async function seedAdmin() {

    const existingUser = await User.findUser();
    
    if (existingUser) {
        console.log('Un utilisateur existe déjà — seed ignoré');
        return;
    }

    const hashPassword = await hash(process.env.DEFAULT_ADMIN_PASSWORD, 10);

    await User.createUser({
        email: process.env.DEFAULT_ADMIN_EMAIL,
        password: hashPassword
    });

    console.log('Compte par défaut créé:', process.env.DEFAULT_ADMIN_EMAIL);
}


module.exports = seedAdmin;