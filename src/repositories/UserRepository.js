const User = require('../models/User');

// CREATE USER
async function createUser (data){    
 const result = await User.create(data);
}
// FIND USERS
async function findUser (){
 return  await User.findOne();
}
// FIND USER BY EMAIL
async function findUserByEmail (email){
 return  await User.findOne({email});
}
// FIND USER BY ID
async function findUserById (id){
 return await User.findById(id);
}


module.exports = {createUser , findUser , findUserByEmail , findUserById}