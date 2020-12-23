const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
import http from 'http';

const bodyParser = require('body-parser');
const dotenv = require('dotenv');

import v1Routes from './router';

dotenv.config();
const app = express();

// const corsOptions = {
//   origin: '*',
//   credentials: true,
//   methods: 'POST',
//   preflightContinue: false,
//   optionsSuccessStatus: 204,
// };

app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// log only 4xx and 5xx responses to console
app.use(
  morgan('dev', {
    skip: () => (process.env.NODE_ENV === 'test' ? true : false),
  })
);

app.use('/api/v1/', v1Routes);
app.use((error, req, res, next) => {
  if (error) {
    res.status(500).json({ error, errorCode: '999' });
  } else {
    next();
  }
});
app.all(['/', '/ping'], function (req, res) {
  res.status(200).json('server is up and running...');
});
app.use(function (req, res) {
  res.status(404).json({ error: 'path not found' });
});

const server = http.createServer(app);
export default { app, server };
