import { format, createLogger, transports } from 'winston';
import { k } from 'src/project-env';

const template = (info: { message: string; requestId?: string }) =>
  info && info.requestId
    ? `[RQID=${info.requestId}] ${info.message}`
    : `${info.message}`;

export const logger = createLogger({
  level: k.LOG_LEVEL,
  format: format.combine(format.splat(), format.printf(template)),
  transports: [new transports.Console()]
});

export function logFunc(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

  const method = descriptor.value;

  descriptor.value = (...args: Array<any>) => {

    const result = method.apply(this, args);
    
    logger.info(`${propertyKey}(${args.map(a => JSON.stringify(a)).join(', ')}) : ${JSON.stringify(result)}`);

    return result;
  }
}