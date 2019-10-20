export {};
let mongoose3 = require('mongoose');

let userSchema = new mongoose3.Schema({
    usuario: String,
    nome: String,
    senha: String,
})

module.exports = mongoose3.model('User', userSchema);