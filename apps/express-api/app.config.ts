import dotenv from "dotenv";
import path from "path";
if (process.env.NODE_ENV !== "production") {
  dotenv.config({
    path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`),
  });
}

export enum Env {
  development = "development",
  production = "production",
  test = "test",
  local = "local",
}

export const SECRETS = {
  NODE_ENV: process?.env?.NODE_ENV ?? "development",
  PORT: process.env.PORT ?? 5000,
};
export type Secrets = typeof SECRETS;
