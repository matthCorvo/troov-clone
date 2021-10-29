// imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // 'bodyParser' est déprécié
const path = require('path');
const cors = require('cors');
const passport = require('passport');

import { PORT } from './config/index';
const  app = express();

// middlewares
// Json Body
app.use(express.json());

// Form Data
app.use(express.urlencoded({extended: false}));

// IMG upload
app.use(express.static(path.join(__dirname, 'public/uploads')));

// Cors
app.use(cors())

// Seting up the static directory
app.use(express.static(path.join(__dirname, 'public')));

// passport Middleware
app.use(passport.initialize());
// Passport Strategy
require('./config/passport')(passport);

// Connection DataBase
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex:true
}).then(() => console.log("Connecter a la DataBase"))
.catch(err => console.log(err));

// Routes
// Post
const posts = require('./routes/postRoutes');
app.use('/api/post', posts);
//userRoutes
const users = require('./routes/userRoutes');
app.use('/api/users', users);
// img route
import imagesRoutes from './routes/images';
app.use('/api/images', imagesRoutes);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/'));
})
// start server
app.listen(PORT, () => 
console.log(`le serveur s'execute sur http://localhost:${PORT}`));  