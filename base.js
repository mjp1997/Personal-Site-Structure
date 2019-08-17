//Importing express and other packages
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const pug = require('pug');
app.set('view engine', 'pug');
app.set('views', 'views');

require('dotenv/config');


//import routes
const postsRoute = require('./routes/posts');
const usersRoute = require('./routes/users');
app.use('/posts', postsRoute);
app.use('/users', usersRoute);
app.use(express.static('resources'));

//Routes
app.get('/', (req, res) => {
	res.render('homepage');
});


//Connect to DB 
mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true },
	() => console.log('connected to db')
);
app.listen(3000, function () {
	console.log("listening on port 3000");
});
