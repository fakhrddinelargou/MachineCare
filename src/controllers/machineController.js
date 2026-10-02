const AppError = require('../utils/AppError');
const asyncHandler = require('../utils/asyncHandler');
const {createMachineSchema} = require('../verification/machineVerefication');
const {handleMachineData} = require('../services/machineService');


const create =  asyncHandler(async (req,res) => {
    const data =  req.body;

    const result = createMachineSchema.safeParse(data);

    if(!result.success){
        throw new AppError(result.error?.issues?.[0]?.message , 400);
    }
    const createMachine = await handleMachineData(result.data);

    return res.status(201).json(createMachine)

})




module.exports = {create}