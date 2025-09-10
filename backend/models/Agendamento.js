const mongoose = require('mongoose');

const agendamentoSchema = new mongoose.Schema({
  pacienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  pacienteNome: { type: String, required: true },
  datetime: { type: Date, required: true },
  cep: { type: String },
  endereco: { type: String },
  clima: { type: String }, 
  chuvaPrevista: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Agendamento', agendamentoSchema);
