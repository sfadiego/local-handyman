import winston from 'winston';
const { combine, timestamp, json } = winston.format;

// patron: adaptador
export const logger = winston.createLogger({
  level: 'info',
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

export function buildLogger(service: string) {
  return {
    log: (message: string) => {
      logger.log('info', { message, service });
    },
    error: (message: string) => {
      logger.log('error', { message, service });
    },
  };
}
