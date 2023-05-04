const {storagesModel} = require('../../models');
const {matchedData} = require('express-validator');
const {handleHttpError} = require('../../utils/handleError');
const handleDeleteFile = require('../../utils/handleDeleteFile');
const fs = require('fs');


const MEDIA_PAHT = `${__dirname}/../../../storage`;
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */


const deleteFile = async (req, res) => {


  try {

    req = matchedData(req);
    const {id} = req;
    const dataFile = await storagesModel.findById(id);
    
    if(!dataFile)return handleHttpError(res, 'No such file or directory', 404);
    
    await storagesModel.delete({_id:id});
    
    const {fileName} = dataFile;
    const deleteFile = handleDeleteFile(fileName)
    
    const data = {
      fileName,
      delete: 1
    }
    deleteFile === 'ok' ? res.status(200).send({data}) : handleHttpError(res, 'No such file or directory', 404);
  } catch (error) {
    handleHttpError(res, 'Internal Server Error', 500);
  }

}


module.exports = deleteFile;