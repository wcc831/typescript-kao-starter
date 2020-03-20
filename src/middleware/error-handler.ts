import { Context } from 'koa';
import { logger } from 'core/common/logger';

export async function errorHandler(ctx: Context, next: Function) {
  try {
    await next();
  } catch (err) {
    
    ctx.status = 500;
    ctx.body = err;
    logger.error(`${ctx.status} response: ${ctx.body}`, { requestId: ctx.requestId });

    if (ctx.status === 500) {
      logger.error(`${err.stack}`, { requestId: ctx.requestId });
    }
  }
}
