import { Context, send } from "../../deps.ts";

export const staticFileMiddleware = async (ctx: Context, next: () => Promise<void>) => {
  const path = `${Deno.cwd()}/public${ctx.request.url.pathname}`;

  if (await fileExists(path)) {
    await send(ctx, ctx.request.url.pathname, {
      root: `${Deno.cwd()}/public`,
    });
  } else {
    await next();
  }
};

async function fileExists(path: string) {
  try {
    const stats = await Deno.lstat(path);
    
    return stats && stats.isFile;
  } catch (e) {
    if (e && e instanceof Deno.errors.NotFound) {
      return false;
    } else {
      throw e;
    }
  }
}
