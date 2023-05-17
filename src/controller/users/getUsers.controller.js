const {userModel} = require('../../models');
const {handleHttpError} = require('../../utils/handleError');


const getUsers = async (req, res) => {

  try {
    
  } catch (error) {
    handleHttpError(res, 'Internal Server Error', 500);
  }
}


module.exports = getUsers;
