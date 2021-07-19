const { connect } = require('mongoose');
const debug = require('debug')('server:ddbbConfig');

connect(
  process.env.DDBB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(
  () => debug('database connection stablished'),
  (error) => debug('database connection error', error)
);
