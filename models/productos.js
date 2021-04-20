const mongoose = require('mongoose')

const ProductoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    unique: true,
    required: [true, 'Por favor ingrese un Título'],
    maxlength: [32, 'El Título no puede exeder los 32 digitos']
  },
  precio: {
    type: Number,
    required: [true, 'Por favor ingrese un Precio'],
    maxlength: [32, 'El Precio no puede exeder los 32 digitos']
  },
  cantidad: {
    type: Number,
    maxlength: [32, 'La Cantidad no puede exeder los 32 digitos']
  },
  imagen:{
    type: String,
    default: 'sin-imagen.png'
  },
  descripcion: {
    type: String,
    maxlength: [500, 'La Descripción no puede exeder los 500 digitos'],
    required: [true, 'Por favor ingrese una Descripción']
  }
});

module.exports = mongoose.model('Producto', ProductoSchema)