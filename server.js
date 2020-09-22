var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

require('./app/routes/Categories.routes.js')(app);
require('./app/routes/Product.routes.js')(app);
require('./app/routes/checkouts.routes.js')(app);
require('./app/routes/login.routes.js')(app);
// Create a Server
var server = app.listen(5500, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("App listening at http://%s:%s", host, port)

})