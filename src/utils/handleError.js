const Colors = require('@colors/colors')
const handleHttpError = (res, msg = 'An error ocurred', code = 400) => {

  console.log(Colors.red(`*** Error *** <<< message: [${msg}] code: [${code}] >>>`));
  res.status(code);
  res.send({Error: msg});
  

}



module.exports = {
  handleHttpError,
}