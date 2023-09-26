const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Shows the help message'),
  async execute(interaction) {
    const embedToSend = new EmbedBuilder()
      .setColor('#3498db')
      .setTitle('ImageSearch Bot Help')
      .setDescription("`Thanks for inviting ImageSearch!`")
      .addFields(
        {
          name: ':frame_photo: Image Commands',
          value:
            "> **/search <term>** - Searches Unsplash for an image matching the search term.\n" +
            "> **/random** - Get a random image from Unsplash.\n" +
            "> **/google-image** - Search for an image on google.",
        },
        {
          name: ':tools: Misc Commands',
          value:
            "> **/help** - Shows this message.\n" +
            "> **/ping** - See the bot's ping to Discord.\n" +
            "> **/invite** - Get an invite link for the bot",
        },
        {
          name: 'Open Source',
          value: 'This is an open source bot on [GitHub]()',
        }
      )
      .setFooter({
        text: "ImageSearch v1.5 by theguyastro"
      });

    await interaction.reply({ embeds: [embedToSend] });
  },
};