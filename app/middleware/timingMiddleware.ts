import { Context } from "../../deps.ts";

export const timing = async (ctx: Context, next: () => Promise<void>) => {
  const start = Date.now();
  
  await next();
  const ms = Date.now() - start;
  
  ctx.response.headers.set("X-Response-Time", `${ms} ms`);
};