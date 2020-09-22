module.exports = function(app) {

    var checkout = require('../controllers/checkouts.controller.js');


    app.post('/api/checkouts', checkout.create);
}