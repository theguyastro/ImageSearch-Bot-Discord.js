const { EmbedBuilder, WebhookClient } = require('discord.js');
const config = require('../../config.json');

function offline() {

  if (config.WebhookLogging.enabled) {
    const wid = config.WebhookLogging.WebhookID;
    const wtk = config.WebhookLogging.WebhookTOKEN;
    const loggingWebhook = new WebhookClient({ id: wid, token: wtk });

    const offlineEmbed = new EmbedBuilder()
    .setTitle('Bot is offline')
    .setDescription(`Bot is now offline.`)
    .setColor('Red')
    .setTimestamp();

    loggingWebhook.send({ embeds: [offlineEmbed] })
      .catch((error) => {
        console.error('Error sending offline status message to webhook:', error);
      });
  }
}

module.exports = { offline };
