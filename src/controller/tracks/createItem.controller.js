const {tracksModel} = require('../../models');
const {handleHttpError} = require('../../utils/handleError');
const {matchedData} = require('express-validator');
/**
 * Create record in DB
 * @param {*} req 
 * @param {*} res 
 */

const createItem = async (req, res) => {

  
  try {
    const body = matchedData(req);
    
    const data = await tracksModel.create(body);
    res.status(201).send({data});
    
  } catch (error) {
    handleHttpError(res, 'Internal Server Error', 500);
  }



}



module.exports = createItem;