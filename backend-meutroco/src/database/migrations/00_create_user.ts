import knex from 'knex';

export async function up(knex: knex){
  return knex.schema.createTable('users', table=>{
    table.increments('id').primary();
    table.string('email').notNullable();
  })
}

export async function down(knex: knex){
  return knex.schema.dropTable('users');
}