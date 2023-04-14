const jwt = require("jsonwebtoken");

const authentication = (req,res,next)=>{
    let token = req.headers.authorization;
  // check the token in body
  if (token) {
    try {
      // check the token is valid or not
      let decode = jwt.verify(token, process.env.SECRETKEY)
      if (decode) {
        next();
      }

    } catch (error) {
      res.json({
        statusCode: 401,
        message: "Your Session is About to Expire!",
        error,
      })
    }

  } else {
    res.json({
      statusCode: 401,
      message: "unauthorized"
    })
  }

}

module.exports = { authentication }
