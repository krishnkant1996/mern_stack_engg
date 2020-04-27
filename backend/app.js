let express = require('express');
let HttpStatus = require('http-status-codes');
let bodyParser = require('body-parser');
let { Config,DbConn } = require('./config')
let DBConnection = DbConn.getSqlConnection()
let routes = require('./routes')
const redis = require("redis");

var cors = require('cors');

const REDIS_CACHE = redis.createClient(process.env.REDIS_PORT);
global.DB = DBConnection;
global.HTTP_STATUS = HttpStatus;
global.CACHE = REDIS_CACHE;

let app = express();
app.use(cors());

app.use(bodyParser.json())

routes.initialize(app)
app.listen(process.env.PORT,() => {
    console.log(`APP IS STARTED AT ${process.env.PORT}`)
});