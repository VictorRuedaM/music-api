const {tracksModel} = require('../../models');
const {matchedData} = require('express-validator');
const {handleHttpError} = require('../../utils/handleError');

/**
 * Get record detail from DB
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {

  try {
    
    req = matchedData(req);
    const {id} = req;
    const data = await tracksModel.findById(id);
    res.status(200).send({data});
  } catch (error) {
    handleHttpError(res, 'Data Not Found', 404);
  }

  

}



module.exports = getItem;