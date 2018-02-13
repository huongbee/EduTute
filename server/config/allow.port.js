const express = require('express');
const app = express();

// Access - Control - Allow - Origin: https://foo.invalid
// Access - Control - Allow - Credentials: true
app.use((req, res, next) => {
    // res.setHeader('Access-Control-Allow-Origin', 'https://huong-learn-angular.herokuapp.com');
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

module.exports = app