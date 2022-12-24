import { config } from "../../deps.ts";

const APP_PORT = config().APP_PORT;
const APP_DOMAIN = config().APP_DOMAIN;

export { APP_DOMAIN, APP_PORT };
