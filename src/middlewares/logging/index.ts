import morgan from 'morgan';
import winston from 'winston';

import {Core} from '../../types/core';

// Define different colors for each level.
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};
winston.addColors(colors);

// Chose the aspect of your log customizing the log format.
const format = winston.format.combine(
    winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
    winston.format.colorize({all: true}),
    winston.format.printf(
        (info) => `[${info.timestamp}] ~ ${info.level}: ${info.message}`,
    ),
);

export const logger = winston.createLogger({
  format,
  transports: [new winston.transports.Console()],
});

/*
 * Morgan Middleware setup
 */

const stream = {
  // Use the http severity
  write: (message: string) => logger.info(message),
};

morgan.token('id', (req: Core.IncomingMessageWithId) => req.id);

export const loggingMiddlewares = [
  morgan('[:id] :method :url RESPONDED :status - :response-time ms', {stream}),
  morgan('[:id] :method :url STARTED', {stream, immediate: true}),
];
