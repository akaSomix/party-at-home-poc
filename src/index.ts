import express, {Express} from 'express';

// MIDDLEWARES
import helmet from 'helmet';
import {requestIdentifierMiddleware} from './middlewares/req-identifier';
import {loggingMiddlewares} from './middlewares/logging';

// ROUTES
import {userRouter} from './routes/userRoutes';

// CONFIGURATIONS
import dotenv from 'dotenv';


// Express basic config
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


/*
 * Define Routes
 */

// Router Users
app.use('/api/users', userRouter);

app.listen(port, () => {
  console.log(`✨ Server is running at https://localhost:${port} ✨`);
});
