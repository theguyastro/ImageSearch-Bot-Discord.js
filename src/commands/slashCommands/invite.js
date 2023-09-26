const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('invite')
    .setDescription('Replies with bot invite info'),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(0x0099FF)
      .setTitle('Invite ImageSearch')
      .setDescription('**Invite the official bot: [Click Here](https://discord.com/api/oauth2/authorize?client_id=729570880983924766&permissions=68608&scope=bot)**\nJoin the [support server](https://discord.gg/G4YP6gcpjA)\n[Vote for ImageSearch](https://top.gg/bot/729570880983924766/vote) on Top.gg!"')    
      .setTimestamp()
      .setFooter({ text: 'Bot Version is 1.5' });

   

    await interaction.reply({ embeds: [embed] });
  },
};
