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
    if(data.length){
      res.status(200).send({data})
    }else{
      handleHttpError(res, 'Data Not Found', 404);
    }
    
  } catch (error) {
    handleHttpError(res, 'Internal Server Error', 500);
  }


  

}



module.exports = getItems;