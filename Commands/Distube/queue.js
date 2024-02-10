const { SlashCommandBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle, ComponentType } = require("discord.js");
const { CreateQueueEmbed } = require("../../Shared/Embeds/CurrentQueueEmbed");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("queue")
    .setDescription("displays the queue of songs"),
    async execute (interaction, client) {
      const queue = client.distube.getQueue(interaction);
      if (!queue) return interaction.reply(`>>> There is **nothing** in the queue right now`);
      
      let currentSong;
      let currentPage = 0;
      let allSongs = [];
      let songSet = [];

      for (let i = 0; i < queue.songs.length; i+=1) {
        song = queue.songs[i];
        if (i === 0) {
          currentSong = { name: song.name, duration: song.formattedDuration, url: song.url };
        } else {
          songSet.push({index: i, name: song.name, duration: song.formattedDuration});
          if (i % 10 === 0) {
            allSongs.push(songSet);
            songSet = [];
          }
        }
        
      }
      allSongs.push(songSet);

      const nextPage = new ButtonBuilder()
			  .setCustomId('next')
			  .setLabel('>')
			  .setStyle(ButtonStyle.Danger);

		  const prevPage = new ButtonBuilder()
			  .setCustomId('prev')
			  .setLabel('<')
			  .setStyle(ButtonStyle.Secondary);

		  const row = new ActionRowBuilder()
			  .addComponents(prevPage, nextPage);
    
      const showQueue = CreateQueueEmbed(currentSong, allSongs[currentPage], currentPage, client);
      
      const reply = await interaction.reply({ embeds: [showQueue], components: [row]});
      const filter = (interaction) => interaction.customId === 'next' || interaction.customId === 'prev';
      const collector = interaction.channel.createMessageComponentCollector({ filter, time: 60000 });

      collector.on('collect', async (interaction) => {
        if (interaction.customId === 'next') {
          currentPage = (currentPage + 1) % allSongs.length;
        } else if (interaction.customId === 'prev') {
          currentPage = (currentPage - 1 + allSongs.length) % allSongs.length;
        }
        const updatedQueueEmbed = CreateQueueEmbed(currentSong, allSongs[currentPage], currentPage, client);
        await interaction.update({ embeds: [updatedQueueEmbed], components: [row] });
      })

      collector.on('end', () => {
        if (!reply.deleted) {
          reply.edit({ components: [] });
        }
      })
    }
}