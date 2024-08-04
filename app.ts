import { Application, oakCors } from "./deps.ts";
import { staticFileMiddleware } from "./app/middleware/staticFileMiddleware.ts";
import router from "./app/routes/index.ts";
import { logger } from "./app/middleware/loggerMiddleware.ts";
import { timing } from "./app/middleware/timingMiddleware.ts";
import notFound from "./app/middleware/notFound.ts";
import { APP_PORT, APP_DOMAIN } from "./app/config/index.ts";

const app = new Application();

app.use(staticFileMiddleware);
app.use(logger);
app.use(timing);
app.use(
  oakCors({
    origin: /^.+localhost:(3000|5173|8080)$/
  })
);
app.use(router.routes());
app.use(router.allowedMethods());

// 404 page.
app.use(notFound);

await app.listen({ port: APP_PORT });
