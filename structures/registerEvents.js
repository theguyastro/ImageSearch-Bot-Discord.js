const fs = require('fs');
const path = require('path');
const { logger } = require('../src/functions/functions');

module.exports = (client) => {
  console.log(`${logger()} ↻ Registering events...`);
  const eventFiles = fs.readdirSync(path.join(__dirname, '../src/events/client/')).filter(file => file.endsWith('.js'));
  let registeredEvents = 0;

  for (const file of eventFiles) {
    if (file.endsWith('.js')) {
      const event = require(path.join(__dirname, '../src/events/client/', file));

      if (event && typeof event.execute === 'function' && event.eventName) {
        client.on(event.eventName, (...args) => event.execute(...args, client));
        registeredEvents++;
      } else {
        console.error(`${logger()} ❌ Event in file ${file} is missing required properties.`);
      }
    }
  }
  console.log(`${logger()} ✅ Registered ${registeredEvents} events`);
  console.log(`${logger()} ↻ Logging in...`)
};
