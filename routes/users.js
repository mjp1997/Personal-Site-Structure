const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('we are on users 2');
});
module.exports = router;