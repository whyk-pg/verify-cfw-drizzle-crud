import { Hono } from "hono";

const app = new Hono();

const getCommonResponse = (method: string) => {
  return {
    status: 200,
    method,
    text: "OK!",
  };
};

app
  .get("/", async (c) => {
    return c.json({
      ...getCommonResponse(c.req.method),
    });
  })
  .post(async (c) => {
    return c.json({
      ...getCommonResponse(c.req.method),
    });
  })
  .patch(async (c) => {
    return c.json({
      ...getCommonResponse(c.req.method),
    });
  })
  .delete(async (c) => {
    return c.json({
      ...getCommonResponse(c.req.method),
    });
  });

export default app;
