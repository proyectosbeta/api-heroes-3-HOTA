import { Application, oakCors, Router } from "./deps.ts";
import { staticFileMiddleware } from "./app/middleware/staticFileMiddleware.ts";
import router from "./app/routes/index.ts";
import { logger } from "./app/middleware/loggerMiddleware.ts";
import { timing } from "./app/middleware/timingMiddleware.ts";
import notFound from "./app/middleware/notFound.ts";
import { methodNotAllowedMiddleware } from "./app/middleware/methodNotAllowedMiddleware.ts";
import { APP_PORT } from "./app/config/index.ts";

const app = new Application();
const apiRouter = new Router();

apiRouter.use('/api/v1', router.routes());

app.use(staticFileMiddleware);
app.use(logger);
app.use(timing);
app.use(
  oakCors({
    origin: /^.+localhost:(3000|5173|8080)$/
  })
);
app.use(apiRouter.routes());
app.use(methodNotAllowedMiddleware);

// 404 page.
app.use(notFound);

await app.listen({ port: APP_PORT });
