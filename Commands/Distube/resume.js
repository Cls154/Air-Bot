const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("resume")
    .setDescription("resume the current song"),
    execute (interaction, client) {
      const queue = client.distube.getQueue(interaction);
      
      if (!queue) return interaction.reply(`>>> There is **nothing** in the queue right now`);
      if (!queue.paused) return interaction.reply(`>>> The song is already playing... 🫠`);

      queue.resume();
      return interaction.reply(`>>> **Resumed** the song for you 😊`);
    }
}