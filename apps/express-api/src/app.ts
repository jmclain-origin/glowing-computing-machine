import express, { Application } from 'express';
import cors from 'cors';
import routes from './routes';
import mongoose from 'mongoose';
import { CONFIG } from './config/app.config';

const app: Application = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

if (CONFIG.NODE_ENV !== 'test')
  mongoose
    .createConnection(CONFIG.MONGO_URI, {})
    .on('connected', () => console.log('Mongo connected'))
    .on('error', (err) => console.log('Mongo err', err));

app.use('/', routes);

export default app;
