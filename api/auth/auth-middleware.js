const { JWT_SECRET } = require('../secrets')
const { findBy } = require('../users/users-model')
const jwt = require('jsonwebtoken')

const checkUsernameExists = async (req, res, next) => {
    try {
        const [ user ] = await findBy({ username: req.body.username })
        if (!user) {
            next({ status:401, message: "username taken" })
        } else {
            req.user = user
            next()
        }
    } catch (err) {
        next(err)
    }
}

const checkUsernamePassword = async (req, res, next) => {
    
}

module.exports = {
    checkUsernameExists
}