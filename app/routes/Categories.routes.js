module.exports = function(app) {

    var Categories = require('../controllers/Categories.controller.js');


    app.post('/api/Categories', Categories.create);


    app.get('/api/Categories', Categories.findAll);


    app.get('/api/Categories/:id', Categories.findOne);


    app.put('/api/Categories/:id', Categories.update);


    app.delete('/api/Categories/:id', Categories.delete);
}