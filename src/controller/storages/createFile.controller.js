const {storagesModel} = require('../../models');
const {handleHttpError} = require('../../utils/handleError')
const {PUBLIC_URL} = process.env;

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */


const createFile = async (req, res) => {

  try {
    const {file} = req;
    if(!file){
      handleHttpError(res, 'Invalid params or wrong data', 400);
      return;
    }
    const fileData = {
      fileName: file.filename,
      url:`${PUBLIC_URL}/${file.filename}`
    }
    
    
    const data = await storagesModel.create(fileData);
    res.status(201).send({data})
  } catch (error) {
    handleHttpError(res, 'Internal Server Error', 500);
  }
  

}


module.exports = createFile;