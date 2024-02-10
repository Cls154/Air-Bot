const { EmbedBuilder } = require("discord.js");
const config = require("../../config.js");

function CreateQueueEmbed(currentSong, songSet, currentPage, client) {

  const fields = songSet.map((song) => ({
    name: `${song.index}: ${song.name} - \`${song.duration}\``,
    value: '\n',
  }));

  return new EmbedBuilder()
      .setColor(0xFFFF00)
      .setAuthor({ name: "Air", iconURL: config.logo })
      .setTitle("📀 Queue 📀")
      .setDescription(`### Playing [${currentSong.name}](${song.url}) - \`${currentSong.duration}\``)
      .setThumbnail(config.logo)
      .addFields(
        { name: `Page: ${currentPage}`, value: `\n` },
        ...fields
      )
      .setTimestamp()
      .setFooter({ text: 'Created by 154', iconURL: config.logo })
}

module.exports = { CreateQueueEmbed };