const handleHttpError = (res, mgs = 'An error ocurred', code = 400) => {

  res.status(code);
  res.send({Error: mgs});
  

}



module.exports = {
  handleHttpError,
}