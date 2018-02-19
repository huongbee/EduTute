const express = require('express')
const router = express.Router();
const { verifyToken } = require('../helpers/jwt')
const authenticate = require('../helpers/authenticate')

router.post('/home', authenticate, (req, res) => {
    res.status(200).send({
        error: false, message: true, user: { login: "login successss" }
    })
})

module.exports = router