const { createMachine, getAllMachines, findMachineByReference, getmachineById, updateMachine } = require("../repositories/machineRepository");
const AppError = require('../utils/AppError');


async function handleMachineData(data) {
    const reference_result = await findMachineByReference(data.reference);
    if (reference_result) throw new AppError('Reference already exist', 409);
    return await createMachine(data);
}

async function getAll(filter) {
    return await getAllMachines(filter)
}

async function getById(id) {

    return await getmachineById(id);

}

async function updateMachineById(id, data) {

    const fields = {};

    if(data.reference){
        const reference_result = await findMachineByReference(data.reference);
        if (reference_result) throw new AppError('Reference already exist', 409);
        fields.reference = data.reference
    }    

    const machine = await getmachineById(id);
    if (!machine) throw new AppError('Machine not found', 404);
    
    if (machine.name != data?.name && data?.name) { fields.name = data.name }
    if (machine.workshop != data?.workshop && data?.workshop) { fields.workshop = data.workshop }
    if (machine.status != data?.status && data?.status) { fields.status = data.status }

    if (Object.keys(fields).length === 0) {
        throw new AppError('Nothing changed !', 400);
    }

    return  await updateMachine(id, fields);
}

module.exports = { handleMachineData, getAll, getById , updateMachineById };