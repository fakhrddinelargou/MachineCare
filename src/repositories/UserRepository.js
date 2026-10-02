const User = require('../models/User');

// CREATE USER
async function createUser(data) {
    return await User.create(data);
}
// FIND USERS
async function findUser() {
    return await User.findOne();
}
// FIND USER BY EMAIL
async function findUserByEmail(email) {
    return await User.findOne({ email });
}
// FIND USER BY ID
async function findUserById(id) {
    return await User.findById(id);
}

// UPDATE USER DATA {FULL_NAME , EMAIL}
async function updateUser(id, data) {
    const user = await User.findByIdAndUpdate(id, data, { runValidators: true })
    return {id : user.id , full_name : user.full_name , email : user.email };
}


module.exports = { createUser, findUser, findUserByEmail, findUserById, updateUser }