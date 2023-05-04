const fs = require('fs');
const PAHT = `${__dirname}/../storage`;



const handleDeleteFile = (fileName) => {

 try {
  fs.unlinkSync(`${PAHT}/${fileName}`)
  return 'ok'
 } catch (error) {
  return 'No such file or directory'
 }
}


module.exports = handleDeleteFile;