const {Router} = require('express');
const {getItems, getItem, createItem, updateItem, deleteItem} = require('../controller/tracks/index');
const {validatorCreateItem} = require('../validators/tracks.validator');

const router = Router();


router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', validatorCreateItem, createItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);


module.exports = router;