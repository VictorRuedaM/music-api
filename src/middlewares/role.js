const {handleHttpError} = require('../utils/handleError');


/**
 * Pass an array with the allowed roles
 * @param {*} role 
 * @returns 
 */
const checkRole = (roles) => (req, res, next) => {

  try {
    
    const {user} = req;
    const rolesByUser = user.role;
    const valiteRole = roles.some((rol) => rolesByUser.includes(rol));
    
    if(!valiteRole){
      handleHttpError(res, 'The User Does Not Have Permissions', 403);
      return;
    }
    next();

  } catch (error) {
    handleHttpError(res, 'Internal Error Server', 500);
  }
  



}


module.exports = checkRole;