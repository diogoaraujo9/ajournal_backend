export {};
let mongoose2 = require('mongoose');

let categoriaSchema = new mongoose2.Schema({
    descricao: String,
    nome: String,
    cor: String
})

module.exports = mongoose2.model('Categoria', categoriaSchema);