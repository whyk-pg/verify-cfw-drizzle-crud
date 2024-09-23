import type { Context } from "hono";
import { env } from "hono/adapter";
import { createMiddleware } from "hono/factory";
import type { DOT_ENV, Env } from "../types";

export const configMiddleware = createMiddleware<Env>(async (ctx, next) => {
  const envConfig = env<DOT_ENV, Context<Env>>(ctx);

  ctx.set("api_key", envConfig.X_API_KEY);
  ctx.set("db_host", envConfig.DB_HOST);
  ctx.set(
    "db_username",
    envConfig.DEVELOP ? envConfig.DEV_DB_USERNAME : envConfig.DB_USERNAME,
  );
  ctx.set(
    "db_password",
    envConfig.DEVELOP ? envConfig.DEV_DB_PASSWORD : envConfig.DB_PASSWORD,
  );
  ctx.set("db_name", envConfig.DB_NAME);

  await next();
});
