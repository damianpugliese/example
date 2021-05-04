const express = require('express');
const router = express.Router();

const { searchItems, searchItemById } = require('../controllers/items');

router.get('/', searchItems);
router.get('/:id', searchItemById);

module.exports = router;