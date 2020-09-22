var Products = {
    Product1: {
        id: 1,
        name: "Product1",
        rawPrice: 1,
        price: 20000,
        code: "AaBb123",
        color: "red",
        categoryId: 1,
        description: "*********",
        stockCount: 111,
        expirationDate: "20/4/2020"


    },
    Product2: {
        id: 2,
        name: "Product2",
        rawPrice: 2,
        price: 20000,
        code: "AB23",
        color: "blue",
        categoryId: 2,
    },
    Product3: {
        id: 3,
        name: "Product3",
        rawPrice: 2,
        price: 20000,
        code: "AAAABBB",
        color: "blue",
        categoryId: 3,
        stockCount: 333,
    },

}

exports.create = function(req, res) {
    var newProduct = req.body; // JavaScript object containing the parse JSON
    Products["Product" + newProduct.id] = newProduct;
    console.log("--->After Post, Products:\n" + JSON.stringify(Products, null));
    res.end("Post Successfully: \n" + JSON.stringify(newProduct, null));
};

exports.findAll = function(req, res) {
    console.log("--->Find All: \n" + JSON.stringify(Products, null));
    res.end("All Products: \n" + JSON.stringify(Products, null));
};

exports.findOne = function(req, res) {
    var Product = Products["Product" + req.params.id];
    console.log("--->Find Product: \n" + JSON.stringify(Product, null));
    res.end("Find a Product:\n" + JSON.stringify(Product, null));
};

exports.update = function(req, res) {
    debugger;
    var id = parseInt(req.params.id);
    var updatedProducts = req.body;
    if (Products["Product" + id] != null) {
        // update data
        Products["Product" + id] = updatedProducts;

        console.log("--->Update Successfully, Products: \n" + JSON.stringify(Products, null))

        // return
        res.end("Update Successfully! \n" + JSON.stringify(updatedProducts, null));
    } else {
        res.end("Don't Exist Product:\n:" + JSON.stringify(updatedProducts, null));
    }
};

exports.delete = function(req, res) {
    var deleteProduct = Products["Product" + req.params.id];
    delete Products["Product" + req.params.id];
    console.log("--->After deletion, Product list:\n" + JSON.stringify(Products, null));
    res.end("Deleted Product: \n" + JSON.stringify(deleteProduct, null));
};