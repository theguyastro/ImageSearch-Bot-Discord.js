const { SlashCommandBuilder } = require('@discordjs/builders');
const {  EmbedBuilder } = require('discord.js');
const fetch = require('isomorphic-fetch');
require('dotenv').config();

const URL = 'https://api.unsplash.com/';

module.exports = {
  data: new SlashCommandBuilder()
    .setName('random')
    .setDescription('Fetches a random image from Unsplash'),
  async execute(interaction) {
    const loading = new EmbedBuilder()
      .setColor('Green')
      .setTitle('Image Search')
      .setDescription(':mag: Please wait while we search the entire universe...')
      .setTimestamp()
      .setFooter({ text: 'Powered by Unsplash' });

    await interaction.reply({ embeds: [loading] });

  
    const response = await fetch(`${URL}photos/random?client_id=${process.env.UNSPLASH_CLIENT_ID}`);
    const image = await response.json();

    const embedToSend = new EmbedBuilder()
      .setColor('#3498db')
      .setTitle('Random Image from Unsplash')
      .setImage(image.urls.regular)
      .setDescription(`Image by [${image.user.name}](${image.user.links.html})`)
      .setTimestamp()
      .setFooter({ text: 'Powered by Unsplash' });

    await interaction.editReply({ embeds: [embedToSend] });
  },
};
