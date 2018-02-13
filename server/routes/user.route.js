const express = require('express');
const router = express.Router();
const User = require('../model/user.model')
const bcrypt = require("bcrypt")

router.get('/register', (req, res) => {
    res.send('received!')
})
router.post('/register', (req, res, next) => {
    console.log('Server receive!')
    const { fullname, email, birthdate, address, gender, phone, password } = req.body
    console.log(email)
    User.signUp(fullname, email, birthdate, address, gender, phone, password)
        .then(user => {
            res.status(200).send({
                error: false, message: true, user
            })
        })
        .catch(err => {
            res.status(400).send({
                error: true, message: err.message, user: false
            })
        })

})


router.post('/login', (req, res, next) => {
    console.log('Server received login infor!')
    const { email, password } = req.body
    console.log(email)
    User.signIn(email, password)
        .then(user => {
            res.status(200).send({
                error: false, message: true, user
            })
        })
        .catch(err => {
            res.status(400).send({
                error: true, message: err.message, user: false
            })
        })

})

module.exports = router