const {Router} = require('express');
const getItems = require('../controller/tracks/getItems.controller');
const getItem = require('../controller/tracks/getItem.controller');
const createItem = require('../controller/tracks/createItem.controller');
const updateItem = require('../controller/tracks/updateItem.controller');
const deleteItem = require('../controller/tracks/deleteItem.controller');

const router = Router();


router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', createItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);


module.exports = router;