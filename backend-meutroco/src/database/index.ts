import { createConnection } from 'typeorm';

import User from '../models/User';

createConnection(
  {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "docker",
    "database": "meu_troco",
    "entities":  [
       
      ],
    "migrations": [
      `${__dirname}/src/database/migrations/*.ts`
    ],
    "cli": {
      "migrationsDir": `${__dirname}/src/database/migrations`
    }
    
  }
);