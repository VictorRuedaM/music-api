const {storagesModel} = require('../../models');
const {matchedData} = require('express-validator');
const {handleHttpError} = require('../../utils/handleError')

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */


const getFile = async (req, res) => {

  try {
    req = matchedData(req);
    const {id} = req;
    const data = await storagesModel.findById(id);
    if(!data){
      handleHttpError(res, 'Data Not Found', 404);
      return;
    }
    res.status(200).send({data})
  } catch (error) {
    handleHttpError(res, 'Internal Server Error', 500);
  }

}


module.exports = getFile;