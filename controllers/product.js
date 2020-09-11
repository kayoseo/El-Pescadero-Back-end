
var Product = require('../models/product');
var controller = {

    product: function (req, res) {
        var product = new Product();
        var params = req.body;
        product.name = params.name;
        product.price = params.price;
        product.stock = params.stock;
        product.offers = params.offers;
        product.category = params.category;
        product.image = params.image;
        product.description = params.description;

        product.save((err, productStored) => {
            if (err) return res.status(500).send({ message: 'Error al guardar' });

            if (!productStored) return res.status(404).send({ message: 'No se pudo guardar' });

            return res.status(200).send({ product: productStored });
        });

    },
    getProducts: function (req, res) {
        Product.find({}).exec((err, products) => {
            if (err) return res.status(500).send({ message: 'Error al devolver los datos' });

            if (!products) return res.status(404).send({ message: 'No hay productos' });

            return res.status(200).send({ products });
        });
    },
};

module.exports = controller;