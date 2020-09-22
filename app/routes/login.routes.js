module.exports = function(app) {

    var login = require('../controllers/login.controller.js');


    app.post('/api/login', login.log);
}