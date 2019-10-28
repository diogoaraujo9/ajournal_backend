
let mongoose3 = require('mongoose');

let userSchema = new mongoose3.Schema({
    usuario: String,
    hash: String,
    nome: String,
    token: String
});

module.exports = mongoose3.model('User', userSchema);