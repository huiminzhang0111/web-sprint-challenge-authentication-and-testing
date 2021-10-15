const router = require('express').Router();
const Users = require('./users-model')
const { restricted } = require('../middleware/restricted')

router.get('/', restricted, (req, res, next) => {
    Users.find()
        .then(users => {
            res.json(users)
        }).catch(next)
})