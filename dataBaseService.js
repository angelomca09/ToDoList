var express = require('express');
var cors = require("cors")
var nedb = require('nedb');
var expressNedbRest = require('express-nedb-rest');

// setup express app
var oApp = express();
oApp.use(cors())

// create  NEDB datastore
var datastore = new nedb({ filename: "todo.db", autoload: true });

// create rest api router and connect it to datastore  
var restApi = expressNedbRest();
restApi.addDatastore('todo', datastore);

// setup express server to serve rest service
oApp.use('/', restApi);

oApp.listen(8080, function () {
    console.log('you may use nedb rest api at port 8080');
});