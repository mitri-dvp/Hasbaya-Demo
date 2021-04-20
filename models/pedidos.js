const mongoose = require('mongoose')

const PedidoSchema = new mongoose.Schema({
  // Campos de cliente
  cliente_id: {
    type: String,
    required: [true, 'Por favor ingrese el ID del cliente'],
  },
  cliente_nombre: {
    type: String,
    required: [true, 'Por favor ingrese el nombre del cliente'],
  },
  cliente_cedula: {
    type: String,
    required: [true, 'Por favor ingrese la cedula del cliente'],
  },
  cliente_telefono: {
    type: String,
    required: [true, 'Por favor ingrese el telefono del cliente'],
  },
  cliente_direccion: {
    type: String,
    required: [true, 'Por favor ingrese la direccion del cliente'],
  },
  // Campos del pedido
  fecha: {
    type: String,
    required: [true, 'Por favor ingrese la Fecha'],
  },
  cambio: {
    type: Number,
    maxlength: [500, 'El Cambio del día no puede exeder los 500 digitos'],
    required: [true, 'Por favor ingrese una Cambio del día']
  },
  codigo: {
    type: String,
    unique: true,
    required: [true, 'Por favor ingrese un Código'],
    maxlength: [6, 'El Código no puede exeder los 6 digitos']
  },
  // Campos de los productos
  lista_productos: {
    type: String,
    required: true
  },
  total: {
    type: Number,
    required: [true, 'Por favor ingrese un Total']
  }
});

module.exports = mongoose.model('Pedido', PedidoSchema)