import { Application } from 'https://deno.land/x/oak/mod.ts';
import { staticFileMiddleware } from './app/middleware/staticFileMiddleware.ts';
import router from './app/routes/index.ts';

const HOST = '0.0.0.0';
const PORT = 4500;

const app = new Application();

app.use(staticFileMiddleware);
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port ${PORT} ...`);
await app.listen(`${HOST}:${PORT}`);
