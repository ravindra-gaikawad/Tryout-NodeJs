var express = require('express');
var router = express.Router();

var product =
    [
        {
            "id": 1,
            "productName": "Pen",
            "productPrice": "200",
            'productStock': "false"
        },
        {
            "id": 2,
            "productName": "Pencil",
            "productPrice": "200",
            "productStock": "false"
        }
    ];

router.get('/', function (req, res) {
    res.send(product);
});

router.post('/', function (req, res) {
    var data = req.body;
    product.push(data);
    res.send(product);
});

router.delete = ('/:id', function (req, res) {

    var id = parseInt(req.params.id) - 1;
    var itemdeleted = product.splice(id, 1);
    if (itemdeleted === undefined) {
        res.send("Not Deleted");
    }
    else {
        res.send(product);
    }
});

router.put = ('/:id', function (req, res) {
    var id = parseInt(req.params.id) - 1;
    var productToUpdate = product[id];
    var data = req.body;

    if (productToUpdate === undefined) {

        res.send("Not Updated");
    }
    else {
        productToUpdate.productName = data.productName;
        productToUpdate.productPrice = data.productPrice;
        productToUpdate.productStock = data.productStock;

        res.send(product);
    }
});

//export this router to use in our index.js
module.exports = router;