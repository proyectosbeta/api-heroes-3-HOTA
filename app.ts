import { Application } from "./deps.ts";
import { staticFileMiddleware } from "./app/middleware/staticFileMiddleware.ts";
import router from "./app/routes/index.ts";
import { APP_HOST, APP_PORT } from "./app/config/index.ts";

const app = new Application();

app.use(staticFileMiddleware);
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port ${APP_PORT} ...`);
await app.listen(`${APP_HOST}:${APP_PORT}`);
