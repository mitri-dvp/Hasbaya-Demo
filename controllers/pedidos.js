const Pedido = require('../models/pedidos');
const asyncHandler = require('../middleware/async');

// @desc        Buscar pedidos
// @route       GET /api/pedidos
// @access      Public
exports.getPedidos = asyncHandler(async (req, res, next) => {
  let query;
  let sort = {codigo: 1};
  Object.keys(req.query).forEach(key => {
    const regex = RegExp(req.query[key], 'i')
    query = {[key]: regex}
    sort = {[key]: 1}
  })
  const lista = await Pedido.find(query).sort(sort);
  res
  .status(200)
  .json({
    success: true,
    msg: `orders_list`,
    body: lista 
  });
});

// @desc        Buscar un pedido por ID
// @route       POST /api/pedidos/:id
// @access      Public
exports.getSinglePedido = asyncHandler(async (req, res, next) => {
  const pedido = await Pedido.findById(req.params.id);
  res
    .status(200)
    .json({
      success: true,
      msg: `Enviando pedido ${req.params.id}`,
      body: pedido 
    });
});

// @desc        Upload pedido
// @route       POST /api/pedidos
// @access      Public
exports.postPedidos = asyncHandler(async (req, res, next) => {
  // const pedido = await Pedido.create(req.body);
  res
    .status(200)
    .json({
      success: true,
      msg: `orders_post`,
      body: req.body 
    });
});

// @desc        Borrar un Pedido
// @route       DELETE /api/pedidos/:id
// @access      Public
exports.deletePedido = asyncHandler(async (req, res, next) => {
  // const pedido = await Pedido.findById(req.params.id);
  // pedido.remove()
  res
    .status(200)
    .json({
      success: true,
      msg: `orders_delete`,
      body: req.params.id 
    });
});
