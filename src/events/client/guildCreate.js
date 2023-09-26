const { WebhookClient, EmbedBuilder } = require('discord.js');
require('dotenv').config();
const config = require('../../../config.json'); 

module.exports = {
  eventName: 'guildCreate', 
  execute: async (guild, client) => { 
    try {
      const currentDate = new Date();
      console.log(`[${currentDate.toLocaleString()}] Joined a new guild: ${guild.name}, ${guild.id}.`);

      if (config.WebhookLogging.enabled) {
        const wid = config.WebhookLogging.WebhookID;
        const wtk = config.WebhookLogging.WebhookTOKEN;
        const totalGuilds = client.guilds.cache.size.toString();

        const loggingWebhook = new WebhookClient({ id: wid, token: wtk });
        const embed = new EmbedBuilder()
          .setTitle(':rocket: Joined a New Guild')
          .setDescription(`Guild Name: ${guild.name}\n Guild ID: ${guild.id}\n Total Guilds: **${totalGuilds}**`)
          .setColor('Blue')
          .setTimestamp();

        await loggingWebhook.send({ embeds: [embed] });
      }
    } catch (error) {
      console.error(`[${currentDate.toLocaleString()}] ❌ Error handling guild join event:', ${error}`);
    }
  }
};






