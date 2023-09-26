const fs = require('fs');
const { logger } = require('../src/functions/functions');

module.exports = (client) => {
  console.log(`${logger()} ↻ Registering handlers...`);
  const handlerFiles = fs.readdirSync('../src/events/handlers');
  let registeredHandlers = 0;

  for (const file of handlerFiles) {
    if (file.endsWith('.js')) {
      const handler = require(`../src/events/handlers/${file}`);

      if (typeof handler.execute === 'function') {
        client.on(handler.eventName, (...args) => handler.execute(...args, client));
        registeredHandlers++;
      } else {
        console.error(`${logger()} ❌ Handler in file ${file} is missing an 'execute' function.`);
      }
    }
  }
  console.log(`${logger()} ✅ Registered ${registeredHandlers} handlers`);
};
