const { verifyToken } = require('../helpers/jwt')

export const userMiddleware = (req, res, next => {
    const { token } = req.headers;
    if (!token) return res.status(404).send({ message: false, user: 'Invalid token' });
    verifyToken(token)
        .then(userObj => {
            req.userId = userObj._id;
            next();
        })
        .catch(err => res.status(404).send({ success: false, message: 'Invalid token' }));
})