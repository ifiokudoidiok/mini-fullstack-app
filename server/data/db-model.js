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
    return db("products").where({ product_id: Number(product_id) }).first()
}


function getAllMerchants() {
 return db('merchants')
}
function getMerchantById(merchant_id) {
    return db("merchants").where({ merchant_id: Number(merchant_id) }).first()
}
function getProductsByCategory(merchant_id) {
/*
select
p.product_name 
from product_categories as pc
join merchants as m
on  pc.merchant_id= m.merchant_id
join products as p
on  pc.product_id= p.product_id
where m.merchant_id = 2

*/
return db('product_categories as pc')
.join('merchants as m','pc.merchant_id','m.merchant_id')
.join('products as p','pc.product_id','p.product_id')
.select('p.product_name ','p.product_description', 'p.product_price')
.where({'m.merchant_id': merchant_id})
}