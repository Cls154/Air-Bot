const { EmbedBuilder } = require("discord.js");
const config = require("../../config.js");

function CreateNowPlayingEmbed(queue, song, client) {
  return new EmbedBuilder()
      .setColor(0xFFFF00)
      .setTitle(song.name)
      .setURL(song.url)
      .setAuthor({ name: "Air", iconURL: config.logo })
      .setDescription("### Is now playing 🎶")
      .setThumbnail(song.thumbnail)
      .addFields(
        { name: "Requested by", value: `${song.user}`, inline: true },
        { name: `Duration`, value: `\`${song.formattedDuration}\``, inline: true },
        { name: "Queue", value: `${queue.songs.length} song(s) - \`${queue.formattedDuration}\``, inline: true },
      )
      .addFields(
        { name: "Views", value: `\`${song.views}\``, inline: true },
        { name: "Volume", value: `\`${queue.volume}\``, inline: true },
        { name: "Autoplay", value: `\`${queue.autoplay}\``, inline: true },
      )
      .setImage(config.pikachus[Math.floor(Math.random() * config.pikachus.length)])
      .setTimestamp()
      .setFooter({ text: 'Created by 154', iconURL: config.logo })
}

module.exports = { CreateNowPlayingEmbed };