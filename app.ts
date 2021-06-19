import { Application } from 'https://deno.land/x/oak/mod.ts';
import router from './app/routes/index.ts';

const HOST = '0.0.0.0';
const PORT = 4500;

const app = new Application();

app.use(router.routes());

console.log(`Listening on port ${PORT} ...`);
await app.listen(`${HOST}:${PORT}`);
