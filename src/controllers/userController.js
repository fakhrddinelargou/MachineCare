const User = require("../models/User");
const { handlUserUpdate , getUser } = require("../services/userService");
const AppError = require("../utils/AppError");
const asyncHandler = require("../utils/asyncHandler");
const { updateUserSchema } = require("../verification/userVerifiction");

const view = asyncHandler(async (req, res) => {
    const id = req.user.id;
    const user = await getUser(id)
    if(!user){throw new  AppError('user not found',404)}
    return res.status(200).json({data : user});
})

const update = asyncHandler(async (req, res) => {
    const data = req.body
    const id = req.user.id


    const result = updateUserSchema.safeParse(data);

    if (!result.success) {
        throw new AppError(validate.error?.issues?.[0]?.message, 400);
    }

    if (Object.keys(result.data).length === 0) {
        throw new AppError('Nothing to update', 400);
    }


    const user = await handlUserUpdate(id, result.data);


    if (!user) {
        throw new AppError('something wrong', 400);
    }

    return res.status(200).json({ message: "Profile updated successfully", data: user })
})


module.exports = { update, view }