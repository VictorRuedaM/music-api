const JWT = require('jsonwebtoken');

const {JWT_SECRET_KEY} = process.env;



/**
 * Recive user data and generate token
 * @param {*} dataUser 
 * @returns 
 */
const generateToken = (dataUser) => {

  const sign = JWT.sign(
    {
      _id: dataUser._id,
      role: dataUser.role
    },
    JWT_SECRET_KEY,
    {
      expiresIn: '24h'
    }
  )

  return sign;

}


/**
 * Recive user token and comare It
 * @param {*} tokenJwt 
 * @returns 
 */
const verifyToken = async (tokenJwt) => {

  try {
    return JWT.verify(tokenJwt, JWT_SECRET_KEY);
  } catch (error) {
    return null;
  }
}


module.exports = {
  generateToken,
  verifyToken
}