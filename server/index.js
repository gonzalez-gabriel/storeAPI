// ENVIRONMENT VARIABLES
require('dotenv').config();
//Server dependencies
const express = require('express');
const cors = require('cors');
//DB models
const Product = require('./models/productModel');
//Routers
const productRouter = require('./routes/productRouter')(Product);

//Initializations
const app = express();
require('./database.js');
//Settings
app.set('port', process.env.PORT || 5000);

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/', productRouter);
//Starting the server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
