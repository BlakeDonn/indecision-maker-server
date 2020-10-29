
exports.up = function(knex) {
  return knex.schema
    .createTable('card_games', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.string('instructions', 10000);
      table.string('description', 10000);
      table.string('materials');
      table.string('number_of_players');
      table.string('video');
      table.boolean('family_friendly').defaultTo(1);
      table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  return knex.schema 
    .dropTable('card_games');
};
