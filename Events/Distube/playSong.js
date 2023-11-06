const { CommandInteraction } = require("discord.js");
const { CreateNowPlayingEmbed } = require("../../Shared/Embeds/NowPlayingEmbed")

module.exports = {
  name: "playSong",
  distube: true,
  execute(queue, song, client) {
    const NowPlaying = CreateNowPlayingEmbed(queue, song, client)
    queue.textChannel.send({ embeds: [NowPlaying]});

  }
}