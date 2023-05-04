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

    res.send(data);
  } catch (error) {
    handleHttpError(res, 'File no Found in DataBase', 404);
  }

}


module.exports = getFiles;