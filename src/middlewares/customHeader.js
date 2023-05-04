const customHeader = (req, res, next) => {

  try {

    const apiKey = req.headers.api_key;
    console.log(apiKey)
    // apiKey === 'undefined' && apiKey === 'coderuma-10' ? next() : res.status(403).send({Error: 'Invalid api key!!!'});
    if(apiKey !== undefined && apiKey === 'coderuma-10'){
      next();
    }else if(apiKey){
      res.status(403).send({Error: 'Invalid api key!!!'});
    }else{
      throw new Error ('Something happened int the customHeader!!!');
    }
    
  } catch (error) {
    res.status(500).send({Error: error.message})
  }

}


module.exports = customHeader;