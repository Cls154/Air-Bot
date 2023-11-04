const { CommandInteraction } = require("discord.js");

module.exports = {
  name: "playSong",
  distube: true,
  execute(queue, song, client) {
    queue.textChannel.send(`Added ${song.name}`);
  }
}