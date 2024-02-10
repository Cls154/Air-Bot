const { EmbedBuilder } = require("discord.js");
const config = require("../../config.js");

function CreateAddSongEmbed(queue, song, client) {
  return new EmbedBuilder()
    .setDescription(`### ${song.user} has added [${song.name}](${song.url}) - \`${song.formattedDuration}\``)
}

module.exports = { CreateAddSongEmbed }