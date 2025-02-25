exports.up = function (knex) {
  return knex.schema.createTable('cars', function (table) {
    table.increments()

    table.string('vin', 17).notNullable().unique()
    table.string('make', 128).notNullable()
    table.string('model', 128).notNullable()
    table.integer('mileage').unsigned().notNullable()
    table.string('title', 128)
    table.string('transmission')
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars');
};
