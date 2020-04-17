
exports.up = function(knex) {
    return knex.schema.createTable('login', function(table) {
        table.increments();
        table.string('name').notNullable();
        table.string('password').notNullable();
        
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('login');
};
