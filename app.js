// Modules
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db')
const colors = require('colors');
const cookieParser = require('cookie-parser');
const fileupload = require('express-fileupload');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');
const hpp = require('hpp');
const rateLimit = require('express-rate-limit')
const open = require('open')
const errorHandler = require('./middleware/error');
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// Initialization
const app = express();

// Load Database
connectDB();

// Initialize Middleware
// Body parser
app.use(express.json());
// Logger
app.use(morgan('dev'));
// File upload
app.use(fileupload());
// Cookie parser
app.use(cookieParser());

// SECURITY //
// Sanitize data
app.use(mongoSanitize());
// Set Security Headers
app.use(helmet());
// Prevent XSS attacks
app.use(xss());
// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 1000 * 60,
  max: 100
});
app.use(limiter);
// Prevent HTTP Param Pollution
app.use(hpp());
// Enable CORS
app.use(cors());

// Set static folder to see Photos
app.use(express.static(path.join(__dirname, 'public')));

// Router
const clientes = require('./routes/clientes');
const pedidos = require('./routes/pedidos');
const productos = require('./routes/productos');
// Mount Router
app.use('/api/clientes', clientes);
app.use('/api/pedidos', pedidos);
app.use('/api/productos', productos);

// Server Initialization
const port = process.env.PORT || 5000;

const server = app.listen(port, async () => {
  console.log(`Servidor esta siendo ejecutada en el pueto: ${port}.`.yellow.bold );
});

// Error Handler middleware
app.use(errorHandler);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Unhandled rejection: ${err.message}`.red.bold);
  // Close server and exit process
  server.close(()=>{
    process.exit(1)
  });
})