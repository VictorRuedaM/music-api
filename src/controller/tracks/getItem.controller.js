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
    if(data !== null){
      res.status(200).send({data});
    }else{
      handleHttpError(res, 'Data Not Found', 404);
    }
    
  } catch (error) {
    handleHttpError(res, 'Internal Server Error', 500);
  }

  

}



module.exports = getItem;