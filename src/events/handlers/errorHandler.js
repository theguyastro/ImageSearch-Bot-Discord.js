const { WebhookClient, MessageEmbed, EmbedBuilder } = require('discord.js');
require('dotenv').config();
const config = require('../../../config.json'); 
const colors = require('colors');
const { logger } = require('../../functions/logger');

module.exports = {
  eventName: 'error',
  async execute(error) {
    try {
      const currentDate = new Date();
      const errorMessage = `${logger()} ${'SYSTEM ERROR'.red} ${error}`;
      console.error(errorMessage);

      if (config.WebhookLogging.enabled) {
        const wid = config.WebhookLogging.WebhookID;
        const wtk = config.WebhookLogging.WebhookTOKEN;

        const loggingWebhook = new WebhookClient({ id: wid, token: wtk });
        const embed = new EmbedBuilder()
          .setTitle(':cd: System Error Occurred')
          .setDescription(errorMessage)
          .setColor('Red')
          .setTimestamp();

        await loggingWebhook.send({ embeds: [embed] });
      }
    } catch (webhookError) {
      console.error(`${logger()} ❌ Error sending error message to webhook:`, webhookError);
    }
  },
};
