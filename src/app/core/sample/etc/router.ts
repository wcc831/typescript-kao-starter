import koaRouter from 'koa-router';
import { sampleController } from 'core/sample/controller/sample.controller'

const router = new koaRouter()
.get('/', sampleController.add)
;

export default router;