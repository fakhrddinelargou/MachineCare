const { updateUser, findUserById } = require("../repositories/UserRepository");
const AppError = require('../utils/AppError')





async function handlUserUpdate(id, data) {
    const feilds = {};
    const user = await findUserById(id);

    if (!user) { throw new AppError('! User not found', 404); }
    if (data.full_name != user.full_name) { feilds.full_name = data.full_name };
    if (data.email != user.email) { feilds.email = data.email };
    if (Object.keys(feilds).length === 0) {
        throw new AppError('Sorry nothing changed', 400);
    }

    const upUser = await updateUser(id, feilds);
    return upUser;
}


async function getUser(id) {
    const data = await findUserById(id);
    return {id : data.id , fullname : data.full_name , email : data.email , createdAt : data.createdAt}
}


module.exports = { handlUserUpdate , getUser }