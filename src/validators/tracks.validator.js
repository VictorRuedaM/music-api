const { check } = require("express-validator");
const validateResults = require('../utils/handleValidators');

const validatorCreateItem = [

  check('name')
  .exists()
  .notEmpty()
  .isLength({min: 4, max: 80}),
  check('album')
  .exists()
  .notEmpty()
  .isLength({min: 4, max: 80}),
  check('cover')
  .exists()
  .notEmpty()
  .isLength({min: 4, max: 80}),
  check('artist')
  .exists()
  .notEmpty()
  .isLength({min: 4, max: 80}),
  check('artist.name')
  .exists()
  .notEmpty()
  .isLength({min: 4, max: 80}),
  check('artist.nickName')
  .exists()
  .notEmpty()
  .isLength({min: 4, max: 80}),
  check('artist.nationality')
  .exists()
  .notEmpty()
  .isLength({min: 4, max: 80}),
  check('duration')
  .exists()
  .notEmpty()
  .isLength({min: 4, max: 80}),
  check('duration.start')
  .exists()
  .notEmpty()
  .isLength({min: 0, max: 80}),
  check('duration.end')
  .exists()
  .notEmpty()
  .isLength({min: 0, max: 80}),
  check('mediaId')
  .exists()
  .notEmpty()
  .isMongoId(),

  (req, res, next) => {
    return validateResults(req, res, next);
  }
]

const validatorgetItemById = [

  check('id')
  .exists()
  .notEmpty()
  .isMongoId(),

  (req, res, next) => {
    return validateResults(req, res, next);
  }
]


module.exports = {
  validatorCreateItem,
  validatorgetItemById,
}

