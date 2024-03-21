import dotenv, { DotenvConfigOptions } from 'dotenv';
import path from 'path';
if (process.env.NODE_ENV !== 'production') {
  const options: DotenvConfigOptions = {
    path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`),
  };
  dotenv.config({ ...options });
}

export const CONFIG = {
  NODE_ENV: process?.env?.NODE_ENV ?? 'development',
  PORT: process.env.PORT ?? 5000,
};

export type AppConfig = typeof CONFIG;
