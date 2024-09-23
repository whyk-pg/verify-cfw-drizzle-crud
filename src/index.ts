import { Hono } from "hono";
import {
  deleteHandler,
  getHandler,
  patchHandler,
  postHandler,
} from "./handlers";
import type { Env } from "./types";

const app = new Hono<Env>();

app
  .get("/", ...getHandler)
  .post(...postHandler)
  .patch(...patchHandler)
  .delete(...deleteHandler);

export default app;
