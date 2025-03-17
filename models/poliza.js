const mongoose = require('mongoose');

const polizaSchema = new mongoose.Schema({
  numeroPoliza: {
    type: String,
    required: true,
    unique: true 
  },
  tipoSeguro: {
    type: String,
    required: true,
    enum: ['Auto', 'Vida', 'Hogar', 'Salud'] 
  },
  titular: {
    type: String,
    required: true
  },
  monto: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Poliza', polizaSchema);