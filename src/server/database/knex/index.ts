import { knex } from 'knex';
import { test, development, production } from './Environment';

const getEnvironment = () => {
  const env = process.env.NODE_ENV || 'development';
  switch (env) {
    case 'test':
      return test;
    case 'production':
      return production;
    default:
      return development;
  }
};

export const Knex = knex(getEnvironment());
