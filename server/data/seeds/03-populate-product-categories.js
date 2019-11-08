exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("product_categories")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("product_categories").insert([
        { product_id: 1, merchant_id: 1 },
        { product_id: 4, merchant_id: 1 },
        { product_id: 7, merchant_id: 1 },
        { product_id: 10, merchant_id: 1 },
        { product_id: 13, merchant_id: 1 },
        { product_id: 16, merchant_id: 1 },
        { product_id: 2, merchant_id: 2 },
        { product_id: 5, merchant_id: 2 },
        { product_id: 8, merchant_id: 2 },
        { product_id: 11, merchant_id: 2 },
        { product_id: 14, merchant_id: 2 },
        { product_id: 17, merchant_id: 2 },
        { product_id: 3, merchant_id: 3 },
        { product_id: 6, merchant_id: 3 },
        { product_id: 9, merchant_id: 3 },
        { product_id: 12, merchant_id: 3 },
        { product_id: 15, merchant_id: 3 },
        { product_id: 18, merchant_id: 3 }
      ]);
    });
};
