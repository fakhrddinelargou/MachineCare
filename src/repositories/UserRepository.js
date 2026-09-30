const User = require('../models/User');


async function createUser (data){    
 const result = await User.create(data);
}

async function findUser (){
 return  await User.findOne();
}

module.exports = {createUser , findUser}