const {Router} = require('express');
const {validatorgetItemById} = require('../validators/tracks.validator')

const router = Router();


router.get('/');
router.get('/:id', validatorgetItemById);
router.put('/:id', validatorgetItemById);
router.delete('/:id', validatorgetItemById)






module.exports = router;