import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import route from './routes/wikiRoute.js';
import adminRoute from './routes/adminRoute.js';
import dbConnection  from './connection/dbConfig.js';
import cors from 'cors'

dotenv.config();
dbConnection();

const app = express();

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.json());
// app.use(cors());
app.use(cors({ origin: ['http://localhost:5173', 'https://sweettweet.netlify.app'] }));

app.use('/test', (req, res) => {
  res.send('ok');
});
app.use('/api', route);
app.use('/api/admin', adminRoute);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`app is listening on ${port}`);
});
