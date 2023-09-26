const { Client, Collection } = require('discord.js');
const fs = require('fs');
const { logger } = require('../src/functions/functions');

module.exports = async (client) => {
  client.commands = new Collection();
  console.log(`${logger()} ↻ Registering slash commands...`);
  const commandFiles = fs.readdirSync('../src/commands/slashCommands').filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {
    const command = require(`../src/commands/slashCommands/${file}`);
    client.commands.set(command.data.name, command);
  }
  
  try {
    const commands = client.commands.map(command => command.data.toJSON());
    const globalCommands = await client.application.commands.set(commands);
    console.log(`${logger()} ✅ Registered ${globalCommands.size} commands globally`);
  } catch (error) {
    console.error(`${logger()} ❌ Error registering slash commands: ${error}`);
  }
};
