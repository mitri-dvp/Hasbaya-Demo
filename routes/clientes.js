const express = require('express');
const {
  getCliente,
  getSingleCliente,
  postCliente,
  updateCliente,
  deleteCliente
} = require('../controllers/clientes');

const Cliente = require('../models/clientes');

const router = express.Router();

router.get('/', getCliente)
router.get('/:id', getSingleCliente)
router.post('/', postCliente)
router.put('/', updateCliente)
router.delete('/', deleteCliente)

module.exports = router;
