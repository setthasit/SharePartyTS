// import dotenv so env variables load before the app start
import 'dotenv/config';

export const configuration = {
  app: {
    port: process.env.APP_PORT || 8888,
  },
  postgres: {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
  },
};
