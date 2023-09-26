const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, EmbedBuilder } = require('discord.js');
const google = require('images-scraper');
const Filter = require('bad-words');

const wordFilter = new Filter();
const image = new google({
  puppeteer: {
    headless: true,
  },
});

module.exports = {
  data: new SlashCommandBuilder()
    .setName('google-image')
    .setDescription('Google an image!')
    .addStringOption(option => option.setName('query').setDescription('What image would you like to find?').setRequired(true))
    .addIntegerOption(option => option.setName('results').setDescription('Number of results (1-4)').setRequired(true)),
  async execute(interaction) {
    const { options } = interaction;
    const query = options.getString('query');
    const numResults = options.getInteger('results');
    const sanitizedQuery = wordFilter.clean(query);

    if (numResults < 1 || numResults > 4) {
      await interaction.reply({ content: 'Error! Number of results must be between 1 and 4.', ephemeral: true });
      return;
    }

    const preliminaryEmbed = new EmbedBuilder()
      .setTitle(':mag: Googling...')
      .setDescription(`:arrows_counterclockwise: We are searching for the **${sanitizedQuery}** on Google...`)
      .setColor('Blue')
      .setFooter({ text: 'Powered by GOOGLE' });

    await interaction.reply({ embeds: [preliminaryEmbed] });

    try {
      const results = await image.scrape(sanitizedQuery, numResults);

      if (results.length === 0) {
        const failedEmbed = new EmbedBuilder()
          .setTitle('Search Failed')
          .setDescription(`No image found with query: **${sanitizedQuery}**`)
          .setColor('Red')
          .setFooter({ text: 'Powered by GOOGLE' });

        await interaction.editReply({ embeds: [failedEmbed] });
      } else {
        const embeds = results.map((result, index) => {
          const embed = new EmbedBuilder()
            .setTitle(`Image Result ${index + 1} for ${sanitizedQuery}.`)
            .setDescription(`[Open Image](${result.url})`)
            .setImage(result.url)
            .setFooter({ text: 'Powered by GOOGLE' })
            .setColor('Green');
          return embed;
        });

        await interaction.editReply({ embeds });
      }
    } catch (error) {
      console.error('Error fetching or processing image URLs:', error);
      await interaction.editReply({ content: 'An error occurred while fetching or processing image URLs.', ephemeral: true });
    }
  },
};
