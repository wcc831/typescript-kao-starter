import { Context } from 'koa';

export async function authorize(ctx: Context, next: Function) {
  /**
   * TODO handle authorization
   */
  await next();
}
