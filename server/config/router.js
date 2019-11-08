const express = require("express");

const model = require("../data/db-model");

const router = express.Router();

router.get("/products", getAllProducts);
router.get("/products/:id", validateProductId, getProductById);
router.get("/merchants", getAllMerchants);
router.get("/merchants/:id", validateMerchantId, getMerchantById);
router.get("/merchant/:id/products", validateMerchantId, getProductsByCategory);

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

function getProductById(req, res) {
  res.json(req.product);
}
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
function getMerchantById(req, res) {
  res.json(req.merchant);
}
function getProductsByCategory(req, res) {
  const id = req.params.id;
  model
    .getProductsByCategory(id)
    .then(products => {
      res.json(products);
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to get products: " + error });
    });
}

//Middleware
function validateProductId(req, res, next) {
  const id = req.params.id;
  model
    .getProductById(id)
    .then(product => {
      if (product) {
        req.product = product;
        next();
      } else {
        res
          .status(404)
          .json({
            message: "product id does not correspond with an actual product"
          });
      }
    })
    .catch(error => {
      res.status(404).json({ message: "invalid product id: " + error.message });
    });
}

function validateMerchantId(req, res, next) {
  const id = req.params.id;
  model
    .getMerchantById(id)
    .then(merchant => {
      if (merchant) {
        req.merchant = merchant;
        next();
      } else {
        res
          .status(404)
          .json({
            message: "merchant id does not correspond with an actual merchant"
          });
      }
    })
    .catch(error => {
      res
        .status(404)
        .json({ message: "invalid merchant id: " + error.message });
    });
}
module.exports = router;
