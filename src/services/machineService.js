const { createMachine, findMachineByReference } = require("../repositories/machineRepository");
const AppError = require('../utils/AppError');


async function handleMachineData(data) {
    const reference_result = await findMachineByReference(data.reference);
    if (reference_result) throw new AppError('Reference already exist', 409);
    return await createMachine(data);
}



module.exports = {handleMachineData};