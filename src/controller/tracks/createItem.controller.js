const {tracksModel} = require('../../models');

/**
 * Create record in DB
 * @param {*} req 
 * @param {*} res 
 */

const createItem = async (req, res) => {

  const {body} = req;

  console.log(body)
  const data = await tracksModel.create(body);


  res.send({data})



}



module.exports = createItem;