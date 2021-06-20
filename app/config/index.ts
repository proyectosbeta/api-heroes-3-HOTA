import { config } from "https://deno.land/x/dotenv/mod.ts";

const APP_PORT = config().APP_PORT;
const APP_HOST = config().APP_HOST;
const APP_DOMAIN = config().APP_DOMAIN;

export { APP_PORT, APP_HOST, APP_DOMAIN };