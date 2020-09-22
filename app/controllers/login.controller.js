var login = {
    login1: {
        id: "test",
        pw: "1234"
    },
    login2: {
        id: "test2",
        pw: "12345"
    }
}


exports.get = function(req, res, next) {
    res.render("login", {});
}


exports.log = function(req, res, next) {
    var id = req.body.id;
    var pw = req.body.pw;

    if (id == "test" && pw == "1234") {
        res.end("login Success");
    } else {
        res.end("login Failed");

    }
}