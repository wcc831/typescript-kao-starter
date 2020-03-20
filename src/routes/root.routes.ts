import koaRouter from 'koa-router';
import sample  from 'core/sample/etc/router'

export const rootRouter = new koaRouter()
  .get('/ping', ctx => ctx.body = 'poing')
  .use('/sample', sample.routes())
;