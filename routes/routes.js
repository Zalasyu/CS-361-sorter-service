// routes.js
const express = require('express');
const router = express.Router();

const sorter = require('../controllers/sorter.js');

router.post('/sort', sorter.compareValues(req.body.key, req.body.order));

module.exports = router;
