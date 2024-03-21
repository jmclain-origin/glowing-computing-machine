import dotenv, { DotenvConfigOptions } from 'dotenv';
import path from 'path';
if (process.env.NODE_ENV !== 'production') {
  const options: DotenvConfigOptions = {
    path: path.resolve(__dirname, '..', '..', `.env.${process.env.NODE_ENV}`),
  };
  console.log(options);
  dotenv.config({ ...options });
}

export const CONFIG = {
  NODE_ENV: process?.env?.NODE_ENV ?? 'development',
  PORT: process.env.PORT ?? 5000,
  MONGO_URI: process.env.MONGO_URI ?? '',
  MONGO_DB_NAME: process.env.MONGO_DB_NAME ?? '',
  MONGO_USERNAME: process.env.MONGO_USERNAME ?? '',
  MONGO_PASSWORD: process.env.MONGO_PASSWORD ?? '',
};

export type AppConfig = typeof CONFIG;
