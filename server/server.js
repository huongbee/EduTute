const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

const db = require('./config/database')
const configPort = require('./config/allow.port')

mongoose.connect(db.mongoURI)
    .then(() => console.log("Mongoose connected!!!!!")
    )
    .catch((err) => console.log("Mongoose connect errrr!!!!!!!!!"))
mongoose.Promise = global.Promise

const app = express();

app.use(configPort)
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.use(morgan('dev'));
//app.use(authenticate)

app.get('/', (req, res) => {
    res.send("Welcome")
});

const port = process.env.PORT || 3000;

const userRoute = require("./routes/user.route")
app.use('/admin', userRoute)

homeRoute = require("./routes/home.route")
app.use('', homeRoute)


app.listen(port, () => {
    console.log(`connected to port ${port}`)
})