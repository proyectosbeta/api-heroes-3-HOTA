import { Context, send } from "../../deps.ts";

export const swaggerMiddleware = async (ctx: Context, next: () => Promise<void>) => {
  const { request, response } = ctx;

  if (request.url.pathname === "/swagger.json") {
    const swaggerFile = await Deno.readTextFile("./swagger.json");
    response.headers.set("Content-Type", "application/json");
    response.body = swaggerFile;
  } else if (request.url.pathname.startsWith("/swagger-ui/")) {
    // Swagger UI
    await send(ctx, request.url.pathname, {
      root: Deno.cwd(),
    });
  } else if (request.url.pathname === "/docs") {
    // index.html Swagger UI
    await send(ctx, "/swagger-ui/index.html", {
      root: Deno.cwd(),
    });
  } else {
    await next();
  }
};
