class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const errorHandler = (err, req, res, next) => {
  let error = { ...err }; // Copy of the Err Object
  error.message = err.message;

  // Log to console for dev
  console.log(err.stack.red);

  // Mongoose Bad ObjectId
  if (err.name === 'CastError') {
    error = new ErrorResponse(`${err.model.modelName} not found with id of ${err.value}`, 404);
  }

  // Mongoose Duplicate Key
  if (err.code === 11000) {
    error = new ErrorResponse('duplicate', 400);
  }

  // Mongoose Validation Err
  if (err.name === 'ValidationError') {
    const message = [] 
    Object.keys(err.errors).forEach(key => {
      message.push([`${key}: ${err.errors[key].message}`])
    })
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server error'
  });
};

module.exports = errorHandler;
