const { hash, compare } = require('bcrypt');

function hashPassword(password) {
    return hash(password, 10);
}


function checkHashPassword(password, hash) {
    return compare(password, hash);
}


module.exports = { hashPassword, checkHashPassword }