const { SlashCommandBuilder, CommandInteraction, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pause")
    .setDescription("pause the current song"),
    execute (interaction, client) {
      const queue = client.distube.getQueue(interaction);
      
      if (!queue) return interaction.reply(`>>> There is **nothing** in the queue right now`);
      if (queue.paused) return interaction.reply(`>>> It is already paused... 🫠`);

      queue.pause();
      return interaction.reply(`>>> **Paused** the song for you 😊`);
    }
}