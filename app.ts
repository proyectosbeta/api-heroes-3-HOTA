import { Application, yellow, green } from "./deps.ts";
import { staticFileMiddleware } from "./app/middleware/staticFileMiddleware.ts";
import router from "./app/routes/index.ts";
import notFound from './app/middleware/notFound.ts';
import { APP_HOST, APP_PORT, APP_DOMAIN } from "./app/config/index.ts";

const app = new Application();

app.use(staticFileMiddleware);

// Logger.
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Timing.
app.use(async (ctx, next) => {
  const start = Date.now();
  
  await next();
  const ms = Date.now() - start;
  
  ctx.response.headers.set("X-Response-Time", `${ms} ms`);
});

app.use(router.routes());
app.use(router.allowedMethods());

// 404 page.
app.use(notFound);

console.log(`${yellow("Listening on: ")} ${green(APP_DOMAIN)}`);

await app.listen(`${APP_HOST}:${APP_PORT}`);