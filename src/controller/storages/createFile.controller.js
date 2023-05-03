const {storagesModel} = require('../../models');
const {PUBLIC_URL} = process.env

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */


const createFile = async (req, res) => {

  
  const {body, file} = req;
  
  const fileData = {
    fileName: file.filename,
    url:`${PUBLIC_URL}/${file.filename}`
  }
  
  const data = await storagesModel.create(fileData);
  res.send(data)

}


module.exports = createFile;