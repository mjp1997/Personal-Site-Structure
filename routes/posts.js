const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/resume', (req, res) => {
	res.render('resume');
});

router.get('/aboutMe', (req, res) => {
	res.render('aboutMe');
});

router.post('/', (req, res) => {
	console.log(req.body);
})
module.exports = router;