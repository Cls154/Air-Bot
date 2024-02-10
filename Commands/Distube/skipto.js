const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("skipto")
    .setDescription("Skip to a song in the queue"),
    execute (interaction, client) {
      const queue = client.distube.getQueue(interaction);
      if (!queue) return interaction.reply(`>>> There is **nothing** in the queue right now`);


    }
}