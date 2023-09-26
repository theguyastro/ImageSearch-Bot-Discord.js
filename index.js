require('dotenv').config();
const fs = require('node:fs');
const path = require('node:path');
const { Client, GatewayIntentBits, Collection } = require('discord.js');
require('colors');
const { checkEnv, offline } = require('./src/functions/functions');
const ready = require('./structures/onceReady')
const registerEventHandlers = require('./structures/registerHandlers')
const registerEvents = require('./structures/registerEvents');
const registerSlashCommands = require('./structures/registerSlashCommands');


console.log(`
                       ╔══════════════════════════════════════════════════╗
                       ║       https://github.com/theguyastro/            ║
                       ║                                                  ║
                       ║  ╔══╗                 ╔═══╗                ╔╗    ║ 
                       ║  ╚╣╠╝                 ║╔═╗║                ║║    ║
                       ║   ║║ ╔╗╔╗╔══╗ ╔══╗╔══╗║╚══╗╔══╗╔══╗ ╔═╗╔══╗║╚═╗  ║
                       ║   ║║ ║╚╝║╚ ╗║ ║╔╗║║╔╗║╚══╗║║╔╗║╚ ╗║ ║╔╝║╔═╝║╔╗║  ║
                       ║  ╔╣╠╗║║║║║╚╝╚╗║╚╝║║║═╣║╚═╝║║║═╣║╚╝╚╗║║ ║╚═╗║║║║  ║
                       ║  ╚══╝╚╩╩╝╚═══╝╚═╗║╚══╝╚═══╝╚══╝╚═══╝╚╝ ╚══╝╚╝╚╝  ║
                       ║               ╔═╝║                               ║
                       ║               ╚══╝                               ║                                               
                       ║                                                  ║
                       ║                                                  ║
                       ║                                                  ║
                       ║           Version 1.5, by theguyastro            ║
                       ╚══════════════════════════════════════════════════╝
`)
checkEnv()
const client = new Client({ intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.MessageContent,
  GatewayIntentBits.GuildEmojisAndStickers,
  GatewayIntentBits.GuildIntegrations,
  GatewayIntentBits.GuildInvites,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.GuildMessageReactions,
  GatewayIntentBits.GuildMessageTyping,
  GatewayIntentBits.GuildModeration,
  GatewayIntentBits.GuildPresences,
  GatewayIntentBits.GuildVoiceStates,
  GatewayIntentBits.AutoModerationConfiguration,
  GatewayIntentBits.AutoModerationExecution,
  GatewayIntentBits.DirectMessageReactions,
  GatewayIntentBits.DirectMessageTyping,
  GatewayIntentBits.DirectMessages,
]});

client.once('ready', () => {
  ready(client);
  registerSlashCommands(client);
});
client.on('disconnect', () => {
  offline();
});
process.on('exit', () => {
  offline();
  console.log('Exited');
});

registerEventHandlers(client);
registerEvents(client);



client.login(process.env.TOKEN);