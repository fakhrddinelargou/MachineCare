const Machine = require('../models/Machine');


async function createMachine(data) {
    return await Machine.create(data);
}

async function findMachineByReference(ref) {
    return await Machine.findOne({reference : ref});
}




module.exports = {createMachine , findMachineByReference}

