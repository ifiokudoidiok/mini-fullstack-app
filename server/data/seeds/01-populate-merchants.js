
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('merchants').del()
    .then(function () {
      // Inserts seed entries
      return knex('merchants').insert([
        {merchant_name: 'service'},
        {merchant_name: 'retail'},
        {merchant_name: 'wholesale'}
      ]);
    });
};
