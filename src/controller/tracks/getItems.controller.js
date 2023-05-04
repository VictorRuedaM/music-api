const {tracksModel} = require('../../models')
const {handleHttpError} = require('../../utils/handleError');

/**
 * Get record list from DB
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {

  try {
    
    const data = await tracksModel.find({});
    res.send({data})
  } catch (error) {
    handleHttpError(res, 'Data Not Found', 404);
  }


  

}



module.exports = getItems;