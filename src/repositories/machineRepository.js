const Machine = require('../models/Machine');


async function createMachine(data) {
    return await Machine.create(data);
}

async function findMachineByReference(ref) {
    return await Machine.findOne({reference : ref});
}


async function getAllMachines(filter) {
    // -1 => DESC
    return await Machine.find(filter).sort({createdAt : -1});
}


async function getmachineById(id) {
    return await Machine.findById(id)
}


module.exports = {createMachine , findMachineByReference ,getAllMachines , getmachineById }

