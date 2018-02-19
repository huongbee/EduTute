const express = require('express')
const apiRoutes = express.Router();
const { verifyToken } = require('../helpers/jwt')
const bodyParser = require('body-parser')

apiRoutes.use(bodyParser.urlencoded({
    extended: false
}))
apiRoutes.use(bodyParser.json())

apiRoutes.use((req, res, next) => {
    const { token } = req.body //|| req.query.token || req.headers['token'];
    // decode token
    console.log("----------------------Token is: " + token + " --------------------")

    if (!token)
        return res.status(403).send({
            error: true,
            message: 'No token provided.'
        });
    verifyToken(token)
        .then(user => {
            if (!user) {
                return res.status(400).send({
                    error: true, message: "User not found!", user: false
                })
            }
            res.status(200).send({
                error: false, message: true, user
            });
        })
        .catch(err => res.json({ error: true, message: 'Failed to authenticate token.' }))
})
module.exports = apiRoutes