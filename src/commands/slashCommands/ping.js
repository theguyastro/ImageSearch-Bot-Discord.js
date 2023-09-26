const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const os = require('os');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
  async execute(interaction) {
    const startTime = Date.now();

    const clientPing = Math.round(interaction.client.ws.ping); 

    const embed = new EmbedBuilder()
      .setColor('#0099ff')
      .setTitle(':ping_pong: Pong!')
      .setDescription(`Bot Ping: ${clientPing}ms`)
      .addFields(
        { name: 'Uptime', value: `${formatUptime(process.uptime())}`, inline: true },
        { name: 'GitHub ', value: '[GitHub](https://github.com/theguyastro/)', inline: true },
      )
      .setFooter({ text: "Made by theguyastro" });
    
    await interaction.reply({ embeds: [embed] });
  },
};

// Helper function to format uptime
function formatUptime(uptime) {
  const seconds = Math.floor(uptime % 60);
  const minutes = Math.floor((uptime / 60) % 60);
  const hours = Math.floor((uptime / 3600) % 24);
  const days = Math.floor(uptime / 86400);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

