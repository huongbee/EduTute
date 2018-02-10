const express = require('express');
const router = express.Router();
const User = require('../model/user.model')
const bcrypt = require("bcrypt")

router.get('hihi', () => {
    console.log('received!')
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
                            .then(() => res.redirect('login'))
                    })
            }
            else res.send('Email exists!!!!')
        })
        .catch(err => {
            res.send(err)
        })

})

module.exports = router