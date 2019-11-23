export {};
let mongoose2 = require('mongoose');

let categoriaSchema = new mongoose2.Schema({
    descricao: String,
    cor: String,
    userId: String,
    index: Number
})

module.exports = mongoose2.model('Categoria', categoriaSchema);