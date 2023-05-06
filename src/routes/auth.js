const {Router} = require('express');
const {validatorRegisterUser, validatorLoginUser} = require('../validators/auth.validator');
const authUser = require('../controller/auth/auth.controller');


const router = Router();


/**
 * Create user in system and gerate token
 */
router.post('/register', validatorRegisterUser, authUser);








module.exports = router;