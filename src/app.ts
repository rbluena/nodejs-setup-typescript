import express from 'express';
import { logger, isDevelopment } from './config';

const PORT = Number(process.env.PORT ?? 8080);
const app = express();

/* MIDDLEWARE */
if (isDevelopment) {
  app.use(logger);
}

/* REQUESTS */
app.get('/', (_, res) => {
  res.json({ status: 200, message: 'Well and Good!' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Listening from port ${PORT}`);
});
