const {tracksModel} = require('../../models');
const {matchedData} = require('express-validator');
const {handleHttpError} = require('../../utils/handleError');


/**
 * Delete DB record
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {

  try {
    
    req = matchedData(req);
    const {id} = req;
    console.log(id)
    const data = await tracksModel.delete({_id: id});
    res.send({data})
    
  } catch (error) {
    handleHttpError(res, 'Internal Server Error', 500);
    console.log(error)
  }


}



module.exports = deleteItem;