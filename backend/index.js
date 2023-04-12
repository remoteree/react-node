var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

var app = express();

let corsRegex = new RegExp(`.*localhost.*`);

let corsOptions = {
  origin: corsRegex,
  credentials: true,
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/test', (req, res) => {
    res.status(200).send({
        message: `Server is up and running as of ${new Date()}!`
    })
})

app.listen(8000, () => {
    console.log('Server is running on port 8000')
})