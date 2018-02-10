const express = require('express');
const bodyParser = require('body-parser');
const configPort = require('./config/allow.port')
const app = express();

app.use(configPort)
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send("Welcome")
});

const port = process.env.PORT || 3000;

const userRoute = require("./routes/user.route")
app.use('/admin', userRoute)

app.listen(port, () => {
    console.log(`connected to port ${port}`)
})