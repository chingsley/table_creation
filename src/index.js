import server from './app';
// console.log('>>>>>>>>>>>>>>>>>>>>>>>> file index.js root');
const db = require('./database/models');

const PORT = process.env.PORT || 3300;

const { log } = console;
const dbconnection = db.sequelize;
dbconnection
  .authenticate()
  .then(async () => {
    log(
      '\n\x1b[32m---@',
      '\x1b[1m\x1b[5m',
      'connection to database successful',
      '\x1b[0m\x1b[32m@---'
    );
    server.server.listen(PORT, function () {
      const { address, port } = this.address();
      const server = `http://${address === '::' ? '0.0.0.0' : address}:${port}`;
      log('\n\nServer Started ON:', '\x1b[36m\x1b[89m', server);
      log('Press Ctrl+C to quit.');
    });
  })
  .catch((e) => {
    /* istanbul ignore next */
    throw e.message;
  });
