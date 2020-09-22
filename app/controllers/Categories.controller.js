//import { Categories } from './categoriesData'
var Categories = {
    Categorie1: {
        name: "Categorie1",
        id: 1

    },
    Categorie2: {
        name: "Categorie2",
        id: 2
    },
    Categorie3: {
        name: "Categorie3",
        id: 3
    },
    Categorie4: {
        name: "Categorie4",
        id: 4
    }
}

exports.create = function(req, res) {
    var newCategorie = req.body;
    Categories["Categorie" + newCategorie.id] = newCategorie;
    console.log("--->After Post, Categories:\n" + JSON.stringify(Categories, null));

    res.end("Post Successfully: \n" + JSON.stringify(newCategorie, null));
};

exports.findAll = function(req, res) {
    console.log("--->Find All: \n" + JSON.stringify(Categories, null));
    res.end("All Categories: \n" + JSON.stringify(Categories, null));
};

exports.findOne = function(req, res) {
    var Categorie = Categories["Categorie" + req.params.id];
    console.log("--->Find Categorie: \n" + JSON.stringify(Categorie, null));
    res.end("Find a Categorie:\n" + JSON.stringify(Categorie, null));
};

exports.update = function(req, res) {
    var id = parseInt(req.params.id);
    var updatedCategorie = req.body;
    if (Categories["Categorie" + id] != null) {
        // update data
        Categories["Categorie" + id] = updatedCategorie;

        console.log("--->Update Successfully, Categories: \n" + JSON.stringify(Categories, null))

        // return
        res.end("Update Successfully! \n" + JSON.stringify(updatedCategorie, null));
    } else {
        res.end("Don't Exist Categorie:\n:" + JSON.stringify(updatedCategorie, null));
    }
};

exports.delete = function(req, res) {
    var deleteCategorie = Categories["Categorie" + req.params.id];
    delete Categories["Categorie" + req.params.id];
    console.log("--->After deletion, Categorie list:\n" + JSON.stringify(Categories, null));
    res.end("Deleted Categorie: \n" + JSON.stringify(deleteCategorie, null));
};