const { JWT_SECRET } = require('../secrets')
const jwt = require('jsonwebtoken')

const restricted = (req, res, next) => {
  /*
    IMPLEMENT

    1- On valid token in the Authorization header, call next.

    2- On missing token in the Authorization header,
      the response body should include a string exactly as follows: "token required".

    3- On invalid or expired token in the Authorization header,
      the response body should include a string exactly as follows: "token invalid".
  */
  const token = req.headers.authorization
  if (!token) {
    return next({ status: 401, message: "token required" })
  } 
  jwt.verify(token, JWT_SECRET, (err, decodeToken) => {
    if (err) {
      next({ status: 401, message: "token invalid" })
    } else {
      req.decodeToken = decodeToken
      next()
    }
  })
};

module.exports = { restricted }