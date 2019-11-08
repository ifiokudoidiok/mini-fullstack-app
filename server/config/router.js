const express = require("express");

const model = require("../data/db-model");

const router = express.Router();

router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.get("/merchants", getAllMerchants);
router.get("/merchants/:id", getMerchantById);
router.get("/merchant/:id/products", getProductsByCategory);

function getAllProducts(req, res) {
    model
    .getAllProducts()
    .then(products => {
      res.json(products);
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to get products: " + error });
    });
}

function getProductById(req, res) {}
function getAllMerchants(req, res) {
    model
    .getAllMerchants()
    .then(merchants => {
      res.json(merchants);
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to get merchants: " + error });
    });
}
function getMerchantById(req, res) {}
function getProductsByCategory(req, res) {}

module.exports = router;
