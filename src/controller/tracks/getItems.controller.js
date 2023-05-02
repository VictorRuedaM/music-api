const {tracksModel} = require('../../models')


/**
 * Get record list from DB
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {

  const data = await tracksModel.find({});
  res.send({data})

}



module.exports = getItems;