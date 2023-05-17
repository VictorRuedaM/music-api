const {tracksModel} = require('../../models');
const {matchedData} = require('express-validator');
const {handleHttpError} = require('../../utils/handleError');

/**
 * Update record in DB
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) => {

  try {

    const {id, ...body} = matchedData(req);
    
    const dataExist =await tracksModel.findById(id);
    console.log(dataExist)
    if(dataExist){
      const data = await tracksModel.findOneAndUpdate({_id: id}, body, { new: true })
      res.status(201).send({data});
      return;
    }
    else{
      handleHttpError(res, 'Data Not Found', 404);
      return;
    }
       
    
  
  } catch (error) {
    handleHttpError(res, 'Internal Server Error', 500);
  }
    
      
    
    


}



module.exports = updateItem;