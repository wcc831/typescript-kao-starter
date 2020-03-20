import Koa from 'koa';
import bodyParser from 'koa-body';
import helmet from 'koa-helmet';
import jwt from 'koa-jwt';
import { logger } from 'core/common/logger';
import { generateRequestId } from 'src/middleware/request-id-generator';
import { errorHandler } from 'src/middleware/error-handler';
import { k } from 'src/project-env';
import { rootRouter } from 'src/routes/root.routes';

export const app = new Koa();

if (k.REQUEST_LOGS) {
  const morgan = require('koa-morgan');
  const format =
    '[RQID=:request-id] - :remote-user' +
    ' [:date[clf]] ":method :url HTTP/:http-version" ' +
    ':status :res[content-length] ":referrer" ":user-agent"';
  morgan.token('request-id', (req: Koa.IncomingMessage) => req.requestId);
  app.use(morgan(format));
}

app
.use(helmet())
.use(
  jwt({
    secret: k.JWT_SECRET,
    passthrough: true
  })
)
.use(bodyParser())
.use(generateRequestId)
.use(errorHandler)
.use(rootRouter.routes())
.use(rootRouter.allowedMethods())

function startFunction() {
  const PORT = process.env.PORT || 3000;
  logger.info(`Starting server on http://localhost:${PORT}`);
  app.listen(PORT);
}

if (require.main === module) {
  if (process.env.PROJECT_ENV === 'staging') {
    const throng = require('throng');
    throng(startFunction);
  } else {
    startFunction();
  }
}