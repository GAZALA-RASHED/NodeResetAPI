module.exports = function(app) {

    var Products = require('../controllers/Product.controller.js');

    app.post('/api/Products', Products.create);
    app.get('/api/Products', Products.findAll);
    app.get('/api/Products/:id', Products.findOne);
    app.put('/api/Products/:id', Products.update);
    app.delete('/api/Products/:id', Products.delete);
}