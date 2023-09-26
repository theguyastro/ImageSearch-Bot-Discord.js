const { SlashCommandBuilder } = require('@discordjs/builders');
const {  EmbedBuilder } = require('discord.js');
const fetch = require('isomorphic-fetch');
require('dotenv').config(); // Load environment variables from .env

const URL = 'https://api.unsplash.com/';

module.exports = {
  data: new SlashCommandBuilder()
    .setName('search')
    .setDescription('Searches Unsplash for an image')
    .addStringOption(option =>
      option.setName('term').setDescription('Search term for the image').setRequired(true)
    ),
  async execute(interaction) {
    const searchTerm = interaction.options.getString('term');

    const loading = new EmbedBuilder()
      .setColor('Green')
      .setTitle('Image Search')
      .setDescription(':mag: Please wait while we search the entire universe...')
      .setFooter({ text: 'Powered by Unsplash' });

    await interaction.reply({ embeds: [loading] });


    const response = await fetch(`${URL}search/photos?query=${encodeURIComponent(searchTerm)}`, {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_CLIENT_ID}`,
      },
    });

    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      const failed = new EmbedBuilder()
        .setColor('Red')
        .setTitle('Image Search')
        .setDescription(`No Image Found with term **${searchTerm}**`)
        .setFooter({ text: 'Powered by Unsplash' });

      await interaction.editReply({ embeds: [failed] });
    } else {
      const image = data.results[0]; 


      const embedToSend = new EmbedBuilder()
        .setColor('#3498db')
        .setTitle('Image Search Result')
        .setImage(image.urls.regular)
        .setDescription(`Image by [${image.user.name}](${image.user.links.html}), **Search Term:** ${searchTerm}`)
        .setFooter({ text: 'Powered by Unsplash' });

      await interaction.editReply({ embeds: [embedToSend] });
    }
  },
};
