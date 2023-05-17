const {userModel} = require('../../models');
const {handleHttpError} = require('../../utils/handleError');
const {matchedData} = require('express-validator');


const getUser = async (req, res) => {

  try {
    
  } catch (error) {
    handleHttpError(res, 'Internal Server Error', 500);
  }
}


module.exports = getUser;