import express from 'express';
import consumerRouter from './controllers/consumers';
import itemRouter from './controllers/items';

const app = express();
app.use(express.json());

app.use('/consumers', consumerRouter);
app.use('/items', itemRouter);

export default app;