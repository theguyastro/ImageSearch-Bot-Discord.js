const dotenv = require('dotenv');
const { logger } = require('./logger');
dotenv.config();

function checkEnv() {
  console.log(`${logger()} Checking required enviroment variables in .env file...`);
  let missingVariables = [];

  if (!process.env.TOKEN) {
    missingVariables.push('TOKEN');
  }

  if (!process.env.UNSPLASH_CLIENT_ID) {
    missingVariables.push('UNSPLASH_CLIENT_ID');
  }

  if (missingVariables.length > 0) {
    console.log(`${logger()} Fill in the following required environment variables in the .env file: ${missingVariables.join(', ')}.`);
    process.exit(1);
  } else {
    console.log(`${logger()} All required environment variables are filled in the .env file.`);
  }
}

module.exports = { checkEnv };
