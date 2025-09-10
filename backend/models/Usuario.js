const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true }, // hash
  tipo: { type: String, enum: ['paciente','secretario'], default: 'paciente' }
}, { timestamps: true });

module.exports = mongoose.model('Usuario', usuarioSchema);
