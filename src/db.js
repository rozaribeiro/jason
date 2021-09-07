const { Client } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const client = new Client();

client
  .connect()
  .then(() => console.log('database connected!'))
  .catch(err => console.error('database connection error:', err.stack))

module.exports = {
  query: (text, params) => client.query(text, params),
}
