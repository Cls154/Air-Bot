const { CreateNowPlayingEmbed } = require("../../Shared/Embeds/NowPlayingEmbed");


module.exports = {
  name: "playSong",
  distube: true,
  async execute(queue, song, client) {
    const NowPlaying = CreateNowPlayingEmbed(queue, song, client);
    queue.textChannel.send({ embeds: [NowPlaying]});
  }
}