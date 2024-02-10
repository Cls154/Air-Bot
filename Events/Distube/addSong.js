const { CreateAddSongEmbed } = require("../../Shared/Embeds/AddSongEmbed");

module.exports = {
  name: "addSong",
  distube: true,
  execute(queue, song, client) {
    const AddSong = CreateAddSongEmbed(queue, song, client)
    queue.textChannel.send({ embeds: [AddSong]});
  }
}