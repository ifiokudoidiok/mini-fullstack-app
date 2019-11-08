const db = require("./db-config.js");

module.exports ={
    getAllProducts,
    getProductById,
    getAllMerchants,
    getMerchantById,
    getProductsByCategory,
}


function getAllProducts() {
   return db('products')
}
function getProductById(product_id) {

}
function getAllMerchants() {
 return db('merchants')
}
function getMerchantById(merchant_id) {

}
function getProductsByCategory(merchant_id) {

}