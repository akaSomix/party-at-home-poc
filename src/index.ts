import express, {Express, Request, Response} from 'express';
import {requestIdentifierMiddleware} from './middlewares/req-identifier';
import {loggingMiddlewares} from './middlewares/logging';
import dotenv from 'dotenv';

import helmet from 'helmet';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;


// Helmet for security
app.use(helmet());

// handle json payloads
app.use(express.json());

// Add request identifier for logging purpose
app.use(requestIdentifierMiddleware);

// Add logging middleware
app.use(...loggingMiddlewares);


app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`✨ Server is running at https://localhost:${port} ✨`);
});
