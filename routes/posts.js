const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
	res.send('we are on posts 2');
});

router.get('/specific', (req, res) => {
	res.send('we are on specific posts');
});

router.post('/', (req, res) => {
	console.log(req.body);
})
module.exports = router;