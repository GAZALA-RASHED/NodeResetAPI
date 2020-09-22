var checkouts = {
    checkout1: {
        id: 1,
        date: "20/2/2020",
        products: [{
            productId: 1,
            unitPrice: 1111,
            Quantity: 20,
            subtotal: 1111 * 20
        }],
        total: 3000,
        discount: 1,
        paymentamount: 40000,
        paymentmethod: "visa"
    }
}


exports.create = function(req, res) {
    var newCheckout = req.body;
    checkouts["checkout" + newCheckout.id] = newCheckout;
    console.log("--->After Post, checkouts:\n" + JSON.stringify(checkouts, null));

    res.end("Post Successfully: \n" + JSON.stringify(newCheckout, null));
};