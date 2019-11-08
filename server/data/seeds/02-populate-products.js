exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("products").insert([
        {
          product_price: 5000,
          product_description: "The best Product in the market",
          product_name: "service"
        },
        {
          product_price: 5000,
          product_description: "The best Product in the market",
          product_name: "retail"
        },
        {
          product_price: 5000,
          product_description: "The best Product in the market",
          product_name: "wholesale"
        },
        {
          product_price: 5000,
          product_description: "The best Product in the market",
          product_name: "service2"
        },
        {
          product_price: 5000,
          product_description: "The best Product in the market",
          product_name: "retail2"
        },
        {
          product_price: 5000,
          product_description: "The best Product in the market",
          product_name: "wholesale2"
        },
        {
          product_price: 5000,
          product_description: "The best Product in the market",
          product_name: "service3"
        },
        {
          product_price: 5000,
          product_description: "The best Product in the market",
          product_name: "retail3"
        },
        {
          product_price: 5000,
          product_description: "The best Product in the market",
          product_name: "wholesale3"
        },
        {
          product_price: 5000,
          product_description: "The best Product in the market",
          product_name: "service4"
        },
        {
          product_price: 5000,
          product_description: "The best Product in the market",
          product_name: "retail4"
        },
        {
          product_price: 5000,
          product_description: "The best Product in the market",
          product_name: "wholesale4"
        },
        {
          product_price: 5000,
          product_description: "The best Product in the market",
          product_name: "service5"
        },
        {
          product_price: 5000,
          product_description: "The best Product in the market",
          product_name: "retail5"
        },
        {
          product_price: 5000,
          product_description: "The best Product in the market",
          product_name: "wholesale5"
        },
        {
          product_price: 5000,
          product_description: "The best Product in the market",
          product_name: "service6"
        },
        {
          product_price: 5000,
          product_description: "The best Product in the market",
          product_name: "retail6"
        },
        {
          product_price: 5000,
          product_description: "The best Product in the market",
          product_name: "wholesale6"
        }
      ]);
    });
};
