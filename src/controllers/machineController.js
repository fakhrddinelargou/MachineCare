const AppError = require('../utils/AppError');
const asyncHandler = require('../utils/asyncHandler');
const { createMachineSchema , objectIdSchema } = require('../verification/machineVerefication');
const { handleMachineData, getAll, getById } = require('../services/machineService');


const create = asyncHandler(async (req, res) => {
    const data = req.body;
    const result = createMachineSchema.safeParse(data);

    if (!result.success) {
        throw new AppError(result.error?.issues?.[0]?.message, 400);
    }
    const createMachine = await handleMachineData(result.data);

    return res.status(201).json(createMachine)

})


const get = asyncHandler(async (req, res) => {
    const data = await getAll();
    return res.status(200).json({ machines: data })
})



const getByID = asyncHandler(async (req, res) => {
    const id = req.params.id
    const result = objectIdSchema.safeParse(id)
    if (!result.success) {
        throw new AppError('Invalid id format', 400);
    }
    const machine = await getById(id);

    if (!machine) {
        throw new AppError('Machine not found', 404);
    }
    return res.status(200).json({ machine: machine });
})



module.exports = { create, get, getByID }