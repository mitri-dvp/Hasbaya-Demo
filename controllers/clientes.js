const Cliente = require('../models/clientes');
const asyncHandler = require('../middleware/async');
const { query } = require('express');

// @desc        Buscar clientes
// @route       GET /api/clientes
// @access      Public
exports.getCliente = asyncHandler(async (req, res, next) => {
  if(req.query.cedula) {
    const lista = await Cliente.find(req.query).sort();
    console.log(lista)
    res
    .status(200)
    .json({
      success: true,
      msg: `lista_clientes`,
      body: lista 
    });
  } else {
    let query;
    let sort = {nombre: 1};
    Object.keys(req.query).forEach(key => {
      const regex = RegExp(req.query[key], 'i')
      query = {[key]: regex}
      sort = {[key]: 1}
    })
    const lista = await Cliente.find(query).sort(sort);
    res
    .status(200)
    .json({
      success: true,
      msg: `Entregando lista de Clientes`,
      body: lista 
    });
  }
});

// @desc        Buscar un cliente por ID
// @route       GET /api/clientes/:id
// @access      Public
exports.getSingleCliente = asyncHandler(async (req, res, next) => {
  const cliente = await Cliente.findById(req.params.id);
  res
    .status(200)
    .json({
      success: true,
      msg: `Enviando cliente ${req.params.id}`,
      body: cliente 
    });
});

// @desc        Crear un cliente
// @route       POST /api/clientes
// @access      Public
exports.postCliente = asyncHandler(async (req, res, next) => {
  // const cliente = await Cliente.create(req.body);
  res
    .status(200)
    .json({
      success: true,
      msg: `clients_post`,
      body: req.body 
    });
});

// @desc        Actualizar un cliente
// @route       PUT /api/clientes
// @access      Public
exports.updateCliente = asyncHandler(async (req, res, next) => {
  // const cliente = await Cliente.findByIdAndUpdate(req.body.id, req.body, {new:true});
  res
    .status(200)
    .json({
      success: true,
      msg: `clients_update`,
      body: req.body 
    });
});

// @desc        Borrar un cliente
// @route       DELETE /api/clientes
// @access      Public
exports.deleteCliente = asyncHandler(async (req, res, next) => {
  // const cliente = await Cliente.findById(req.body.id);
  // cliente.remove()
  res
    .status(200)
    .json({
      success: true,
      msg: `clients_delete`,
      body: req.body.id 
    });
});
