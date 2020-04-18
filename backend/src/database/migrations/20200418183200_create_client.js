exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
        table.increments();
        table.string('name').notNullable();
        table.string('id_game').notNullable();
        table.decimal('value').notNullable();
        table.integer('diamonds').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};