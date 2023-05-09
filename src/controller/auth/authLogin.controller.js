const {userModel} = require('../../models')
const {matchedData} = require('express-validator')
const {generateToken} = require('../../utils/handleJwt');
const {handleHttpError} = require('../../utils/handleError');
const {comparePassword} = require('../../utils/handlePassword');


/**
 * Validate a user in the system and return their data and a token
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */

const authLoginUser = async (req, res) => {

  try {

    req = matchedData(req);
    const {email, password} = req;
    
    const user = await userModel.findOne({email}).select('name email password role');
    console.log(user)
    if(!user){
      handleHttpError(res, 'User Not Exists', 404);
      return;
    }
    const hashPassword = user.password;
    const checkPassword = await comparePassword(password, hashPassword);
    console.log(checkPassword)
    if(!checkPassword){
      handleHttpError(res, 'Invalid Password', 401);
      return;
    }

    user.set('password', undefined, {strict: false});
    const data = {
      user,
      token: generateToken(user)
    }
    res.status(200).send({data});
    
  } catch (error) {
    handleHttpError(res, 'Internal Server Error', 500);
  }
}





module.exports = authLoginUser;