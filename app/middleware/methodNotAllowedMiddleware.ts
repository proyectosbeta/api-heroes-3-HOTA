import { Context } from "../../deps.ts";

export const methodNotAllowedMiddleware = async (
  context: Context,
  next: () => Promise<void>,
) => {
  try {
    await next();
    if (context.request.method !== "GET" && !context.response.body) {
      context.response.status = 405;
      context.response.body = {
        message: "Method Not Allowed. Only Get is permitted.",
      };
    }
  } catch (error) {
    if (error.status === 405) {
      context.response.status = 405;
      context.response.body = {
        message: "Method Not Allowed",
      };
    } else {
      throw error;
    }
  }
};
