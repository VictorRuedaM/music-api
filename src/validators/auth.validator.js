const { check } = require("express-validator");
const validateResults = require('../utils/handleValidators');



const validatorRegisterUser = [

  check('name')
  .exists()
  .notEmpty()
  .isLength({min: 3, max: 100}),
  check('age')
  .exists()
  .notEmpty()
  .isNumeric({min: 12, max: 100}),
  check('email')
  .exists()
  .notEmpty()
  .isEmail(),
  check('password')
  .exists()
  .notEmpty()
  .isLength({min: 8, max: 16}),
  

  (req, res, next) => {
    return validateResults(req, res, next);
  }
]

const validatorLoginUser = [

  
  check('email')
  .exists()
  .notEmpty()
  .isEmail(),
  check('password')
  .exists()
  .notEmpty()
  .isLength({min: 8, max: 16}),
  

  (req, res, next) => {
    return validateResults(req, res, next);
  }
]


module.exports = {
  validatorRegisterUser,
  validatorLoginUser
}

