const express = require('express');
const router = express.Router();
const graduates = require('../_data/index');

router.get('/', (req, res) => {
    res.status(200).send(graduates);
})


module.exports = router;