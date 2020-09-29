import express from 'express';
import knex from 'knex';

const routes = express.Router();

routes.post('/users', async (request, response) => {
  const { email } = request.body;

  await knex('users').insert({
    email
  })
})

export default routes;