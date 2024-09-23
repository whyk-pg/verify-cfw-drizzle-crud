import { createFactory } from "hono/factory";
import { configMiddleware } from "../middlewares/config";
import type { Env } from "../types";

const factory = createFactory<Env>();

export const getCommonResponse = (
  method: string,
  apiKey: string | undefined,
) => {
  return {
    status: 200,
    method,
    text: "OK!",
    apiKey: apiKey ?? "",
  };
};

export const getHandler = factory.createHandlers(
  configMiddleware,
  async (c) => {
    return c.json({
      ...getCommonResponse(c.req.method, c.var.api_key),
    });
  },
);
export const postHandler = factory.createHandlers(
  configMiddleware,
  async (c) => {
    return c.json({
      ...getCommonResponse(c.req.method, c.var.api_key),
    });
  },
);

export const patchHandler = factory.createHandlers(
  configMiddleware,
  async (c) => {
    return c.json({
      ...getCommonResponse(c.req.method, c.var.api_key),
    });
  },
);

export const deleteHandler = factory.createHandlers(
  configMiddleware,
  async (c) => {
    return c.json({
      ...getCommonResponse(c.req.method, c.var.api_key),
    });
  },
);
