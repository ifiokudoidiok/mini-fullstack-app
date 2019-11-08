exports.up = function(knex) {
  return knex.schema
    .createTable("merchants", table => {
      table.increments("merchant_id");
      table.string("merchant_name", 128).notNullable();
    })
    .createTable("products", table => {
      table.increments("product_id");
      table.string("product_name", 128).notNullable();
      table.text("product_description").notNullable();
      table.integer("product_price").notNullable();
    })
    .createTable("product_categories", table => {
      table
        .increments("product_categories_id")
        .unsigned()
        .notNullable()
        .references("merchant_id")
        .inTable("merchants")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .string("product_id", 128)
        .unsigned()
        .notNullable()
        .references("product_id")
        .inTable("products")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("product_categories")
    .dropTableIfExists("products")
    .dropTableIfExists("merchants");
};
