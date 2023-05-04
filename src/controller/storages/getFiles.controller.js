const {storagesModel} = require('../../models');
const {handleHttpError} = require('../../utils/handleError')

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */


const getFiles = async (req, res) => {

  try {

    const data = await storagesModel.find({});
    console.log(data.length)
    data.length ? res.send(data) : handleHttpError(res, 'File no Found in DataBase', 404);;
    
  } catch (error) {
    handleHttpError(res, 'Internal Server Error', 500);
  }

}


module.exports = getFiles;