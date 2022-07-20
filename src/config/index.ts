import pino from 'pino-http';

const isDevelopment = process.env.NODE_ENV === 'development';

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      translateTime: 'SYS:dd-mm-yyyy HH:MM:ss',
      ignore: 'pid,hostname',
      hideObject: true,
      colorize: true,
    },
  },
});

export { logger, isDevelopment };
