const express = require('express');
const router = express.Router();
const User = require('../model/user.model')
const bcrypt = require("bcrypt")

router.get('/register', (req, res) => {
    res.send('received!')
})
router.post('/register', (req, res, next) => {
    console.log('Server receive!')
    const { fullname, email, birthdate, address, gender, phone, password, token } = req.body
    console.log(email)

    User.findOne({ email })
        .then(user => {
            if (!user) {
                const { fullname, email, birthdate, address, gender, phone, password } = req.body
                bcrypt.hash(password, 10)
                    .then(pwHash => {
                        new User({ fullname, email, birthdate, address, gender, phone, password: pwHash })
                            .save()
                            .then((user) => res.status(200).send({ message: true, user: user }))
                    })
            }
            else res.status(404).send({ message: false, user: false })
        })
        .catch(err => {
            res.status(404).send({
                message: false, error: err.message
            })
        })

})

module.exports = router