const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("shuffle")
    .setDescription("shuffle the songs in the queue"),
    execute (interaction, client) {
      const queue = client.distube.getQueue(interaction);
      if (!queue) return interaction.reply(`>>> There is **nothing** in the queue right now`);

      queue.shuffle();
      return interaction.reply(`>>> **Shuffled** the playlist for you 😊 (Hehe Simon made this)`);
    }
}