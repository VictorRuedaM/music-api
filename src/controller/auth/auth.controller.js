const {userModel} = require('../../models')
const {matchedData} = require('express-validator')
const {encryptPassword, comparePassword} = require('../../utils/handlePassword');
const {generateToken} = require('../../utils/handleJwt');
const {handleHttpError} = require('../../utils/handleError');

const authUser = async (req, res) => {
  try {
    req = matchedData(req);
    const {body, password} = req
    const passwordEncryted = await encryptPassword(password);
    
    const dataUser = {
      ...req,
      password: passwordEncryted
    }
    
    
    const saveData = await userModel.create(dataUser);
    console.log(saveData)
    

    saveData.set('password', undefined, {strict: false});

    const data = {
      user: saveData,
      toke: generateToken(saveData)
    }
    
    res.status(201).send({data});
  } catch (error) {

    if(error.name === 'MongoServerError' && error.code === 11000){
      return handleHttpError(res, 'User Already Exists', 400);
    }
    handleHttpError(res, 'Internal Server Error', 500);
    
  }


}


module.exports = authUser;