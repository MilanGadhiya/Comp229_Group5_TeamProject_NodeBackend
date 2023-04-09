var http = require('http');
var express = require('express');
var port = process.env.PORT || 8080;
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var dotenv = require('dotenv');
var appRoutes = require('./routes/appRoutes');
var authRoutes = require('./routes/auth');

dotenv.config( { path : 'config.env'} )

const connectDB = require('./server/database/connection');
// mongodb connection
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200']
}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', appRoutes);
app.use('/api', authRoutes);

http.createServer(app).listen(port);

console.log("Backend Running on port:", port);