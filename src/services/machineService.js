const { createMachine, getAllMachines, findMachineByReference  , getmachineById } = require("../repositories/machineRepository");
const AppError = require('../utils/AppError');


async function handleMachineData(data) {
    const reference_result = await findMachineByReference(data.reference);
    if (reference_result) throw new AppError('Reference already exist', 409);
    return await createMachine(data);
}

async function getAll() {
    return await getAllMachines()
}

async function getById(id){
   
    return await getmachineById(id);

}

module.exports = { handleMachineData, getAll , getById };