const AppError = require('../utils/AppError');
const asyncHandler = require('../utils/asyncHandler');
const { createMachineSchema, objectIdSchema , machineFilterSchema } = require('../verification/machineVerefication');
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
    const query = req.query;
    
    const cases = ['workshop', 'status', 'name'];
    const filter = {};
    const queryAsArr = Object.entries(query)
    
    for (let i = 0; i < queryAsArr.length; i++) {
       for (let a = 0; a < cases.length; a++) {
           if (queryAsArr[i][0] === cases[a]) {
               filter[cases[a]] = queryAsArr[i][1]
            }        
       }        
    }

    console.log(filter);


    if (Object.keys(filter).length === 0) {
        const data = await getAll();
        return res.status(200).json({ machines: data })
    }

    const result = machineFilterSchema.safeParse(filter)

    if(!result.success){
          throw new AppError(result.error.issues?.[0]?.message , 400);
    }

    const data = await getAll(result.data);

    
        return res.json({ message: data })
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