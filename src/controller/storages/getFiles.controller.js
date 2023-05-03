const {storagesModel} = require('../../models');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */


const getFiles = async (req, res) => {

  const data = await storagesModel.find({});

  res.send(data);

}


module.exports = getFiles;