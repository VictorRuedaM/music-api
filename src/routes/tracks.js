const {Router} = require('express');
const {getItems, getItem, createItem, updateItem, deleteItem} = require('../controller/tracks/index');
const {validatorCreateItem, validatorgetItemById} = require('../validators/tracks.validator');
const custom = require('../middlewares/customHeader');

const router = Router();


router.get('/:id', validatorgetItemById, getItem);
router.get('/', getItems);

router.post('/', validatorCreateItem, createItem);
router.put('/:id',validatorgetItemById, validatorCreateItem, updateItem);
router.delete('/:id',validatorgetItemById, deleteItem);


module.exports = router;