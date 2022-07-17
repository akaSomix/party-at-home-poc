/**
 * Middleware that assignes to each request an unique id
 * by using UUID v4
 */
const uuid = require('uuid').v4;

export const requestIdentifierMiddleware = (req: any, res: any, next: any) => {
  req.id = uuid();
  next();
};
