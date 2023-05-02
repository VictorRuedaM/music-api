const {Router} = require('express');
const {getItems, getItem, createItem, updateItem, deleteItem} = require('../controller/tracks/index');

const router = Router();


router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', createItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);


module.exports = router;