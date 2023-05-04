const {Router} = require('express');
const {getItems, getItem, createItem, updateItem, deleteItem} = require('../controller/tracks/index');
const {validatorCreateItem, validatorgetItemById} = require('../validators/tracks.validator');
const custom = require('../middlewares/customHeader');

const router = Router();

/**
 * Get item details
 */
router.get('/:id', validatorgetItemById, getItem);
/**
 * Get list of items
 */
router.get('/', getItems);
/**
 * Create item in DB
 */
router.post('/', validatorCreateItem, createItem);
/**
 * Update item in DB
 */
router.put('/:id',validatorgetItemById, validatorCreateItem, updateItem);
/**
 * Logical deletion of item in DB
 */
router.delete('/:id',validatorgetItemById, deleteItem);



module.exports = router;