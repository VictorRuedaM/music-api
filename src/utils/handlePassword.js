const bcryct = require('bcryptjs');

/**
 * Plain text password of the user
 * @param {*} passwordPlain 
 * @returns 
 */

const encryptPassword = async (passwordPlain) => {

  const hash = await bcryct.hash(passwordPlain, 10);
  return hash;

}


/**
 * Plain text password of the user
 * @param {*} passwordPlain 
 * Database encrypted password
 * @param {*} passwordHash 
 * @returns 
 */

const comparePassword = async (passwordPlain, passwordHash) => {

  const result = await bcryct.compare(passwordPlain, passwordHash);
  return result;
}



module.exports = {
  encryptPassword,
  comparePassword
}