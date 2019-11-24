export {};
const mongoose1 = require('mongoose');

let dailySchema = new mongoose1.Schema({
    descricao: String,
    tipo: String,
    key: String,
    data: String,
    categoriaId: String,
    tarefaCompleta: Boolean,
    userId: String,
    categoriaIndex: Number
})

module.exports = mongoose1.model('dailyLog', dailySchema);