const express = require('express');
const {
  getProducto,
  getSingleProducto,
  postProducto,
  updateProducto,
  deleteProducto
} = require('../controllers/productos');

const Producto = require('../models/productos');

const router = express.Router();

router.get('/', getProducto)
router.get('/:id', getSingleProducto)
router.post('/', postProducto)
router.put('/', updateProducto)
router.delete('/', deleteProducto)

module.exports = router;
