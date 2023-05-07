const {Router} = require('express');
const {validatorRegisterUser, validatorLoginUser} = require('../validators/auth.validator');
const authRegisterUser = require('../controller/auth/authRegister.controller');
const authLoginUser = require('../controller/auth/authLogin.controller');


const router = Router();


/**
 * Create user in system and gerate token
 */
router.post('/register', validatorRegisterUser, authRegisterUser);

/**
 * User login in system
 */
router.post('/login', validatorLoginUser, authLoginUser);








module.exports = router;