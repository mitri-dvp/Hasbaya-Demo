const mongoose = require('mongoose')

const ClienteSchema = new mongoose.Schema({
  cedula: {
    type: Number,
    required: [true, 'Por favor ingrese una Cédula'],
    unique: true,
    maxlength: [32, 'La Cédula no puede exeder los 32 digitos']
  },
  nombre: {
    type: String,
    required: [true, 'Por favor ingrese un Nombre'],
    maxlength: [96, 'El Nombre no puede exeder los 96 digitos']
  },
  telefono: {
    type: String,
    required: [true, 'Por favor ingrese un Teléfono'],
    maxlength: [32, 'El Teléfono no puede exeder los 32 digitos']
  },
  email:{
    type: String,
    required: [true, 'Por favor ingrese un Email'],
  },
  direccion: {
    type: String,
    required: [true, 'Por favor ingrese una Direccion']
  }
});

module.exports = mongoose.model('Cliente', ClienteSchema)