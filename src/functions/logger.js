const colors = require('colors');

function logger() {
  const currentDate = new Date();
  const formattedDate = `[${currentDate.toLocaleString()}]`.blue;
  return formattedDate;
}

module.exports = { logger };
