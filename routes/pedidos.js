const express = require('express');
const {
  getPedidos,
  getSinglePedido,
  postPedidos,
  deletePedido
} = require('../controllers/pedidos');

const router = express.Router();

router.get('/', getPedidos)
router.get('/:id', getSinglePedido)
router.post('/', postPedidos)
router.delete('/:id', deletePedido)

module.exports = router;
