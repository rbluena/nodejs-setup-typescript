import express from 'express';
import morgan from 'morgan';

const PORT = Number(process.env.PORT ?? 8080);

const app = express();

app.use(morgan('dev'));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Listening from port ${PORT}`);
});
