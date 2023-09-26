const { logger } = require('../src/functions/functions'); 
const { Client, ActivityType, EmbedBuilder, WebhookClient } = require('discord.js');
const config = require('../config.json'); 



module.exports = async (client) => {
  console.log(`${logger()} ✅Logged in as ${client.user.tag}`);

  if (config.Presence.enabled) {
    const activityType = config.Presence.Activity;
    const activityText = config.Presence.Status;

 
    let setType;
    switch (activityType) {
      case "PLAYING":
        setType = ActivityType.Playing;
        break;
      case "WATCHING":
        setType = ActivityType.Watching;
        break;
      case "LISTENING":
        setType = ActivityType.Listening;
        break;
      default:
        setType = ActivityType.Playing; 
        break;
    }

    client.user.setActivity({ name: activityText, type: setType });
  }
    if (config.WebhookLogging.enabled) {
    const wid = config.WebhookLogging.WebhookID;
    const wtk = config.WebhookLogging.WebhookTOKEN;

    const loggingWebhook = new WebhookClient({ id: wid, token: wtk });
    const embed = new EmbedBuilder()
      .setTitle(':green_circle: Bot is online')
      .setDescription(`Bot ${client.user.tag} is online! `)
      .setColor('Green')
      .setTimestamp();

    await loggingWebhook.send({ embeds: [embed] });
  }
 


};
