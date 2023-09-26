const { WebhookClient, EmbedBuilder } = require('discord.js');
require('dotenv').config();
const config = require('../../../config.json'); 
const { logger } = require('../../functions/logger');

module.exports = {
  eventName: 'interactionCreate',
  async execute(interaction, client) {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      const errorMessage = `${logger()} ${'INTERACTION ERROR'.red} ${error}`;
      console.error(errorMessage);

      if (config.WebhookLogging.enabled) {
        const wid = config.WebhookLogging.WebhookID;
        const wtk = config.WebhookLogging.WebhookTOKEN;

        const loggingWebhook = new WebhookClient({ id: wid, token: wtk });

        const embed = new EmbedBuilder()
          .setTitle(':hammer_pick: Command Execution Error')
          .setDescription(
            `An error occurred while executing the slash command **"/${interaction.commandName}"**  \nGuild ${interaction.guildId}\nError \`\`\`${error}\`\`\``
          )
          .setColor('Red')
          .setTimestamp();

        await loggingWebhook.send({ embeds: [embed] });
      }

      await interaction.reply({
        content:
          'There was an error while executing this command! Please check if the bot has the following permissions for this channel: **View Channel** and **Send Messages**',
        ephemeral: true,
      });
    }
  },
};
