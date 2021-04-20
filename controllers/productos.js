const Producto = require('../models/productos');
const asyncHandler = require('../middleware/async');

// @desc        Buscar productos
// @route       GET /api/productos?single
// @access      Public
exports.getProducto = asyncHandler(async (req, res, next) => {
  let query;
  let sort = {titulo: 1};
  Object.keys(req.query).forEach(key => {
    const regex = RegExp(req.query[key],'i')
    query = {[key]: regex}
    sort = {[key]: 1}
  })
  let productos = await Producto.find(query).sort(sort);

  if(req.query.single) {
    productos = await Producto.findById(productos[0]._id)
  }

  res
  .status(200)
  .json({
    success: true,
    msg: `products_list`,
    body: productos 
  });
});

// @desc        Buscar un producto por ID
// @route       POST /api/productos/:id
// @access      Public
exports.getSingleProducto = asyncHandler(async (req, res, next) => {
  const producto = await Producto.findById(req.params.id);
  res
    .status(200)
    .json({
      success: true,
      msg: `Enviando producto`,
      id: req.params.id,
      body: producto 
    });
});

// @desc        Crear un producto
// @route       POST /api/productos
// @access      Public
exports.postProducto = asyncHandler(async (req, res, next) => {
  // const producto = await Producto.create(req.body);
  res
    .status(200)
    .json({
      success: true,
      msg: `products_post`,
      body: req.body 
    });
});

// @desc        Actualizar un Producto
// @route       PUT /api/Productos
// @access      Public
exports.updateProducto = asyncHandler(async (req, res, next) => {
  // const producto = await Producto.findByIdAndUpdate(req.body.id, req.body, {new:true});
  res
    .status(200)
    .json({
      success: true,
      msg: `products_update`,
      body: req.body 
    });
});

// @desc        Borrar un Producto
// @route       DELETE /api/Productos
// @access      Public
exports.deleteProducto = asyncHandler(async (req, res, next) => {
  // const producto = await Producto.findById(req.body.id);
  // producto.remove()
  res
    .status(200)
    .json({
      success: true,
      msg: `products_delete`,
      body: req.body.id 
    });
});