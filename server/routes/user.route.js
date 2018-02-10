const express = require('express');
const router = express.Router();

router.get('hihi', () => {
    console.log('received!')
})
router.post('/register', (req, res, next) => {
    console.log('Server receive!')
    console.log(req.email)

})

module.exports = router