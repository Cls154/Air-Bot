const { SlashCommandBuilder, CommandInteraction, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("autoplay")
    .setDescription("start autoplaying songs"),
    execute (interaction, client) {
      const queue = client.distube.getQueue(interaction);
      if (!queue) return interaction.reply(`>>> There is **nothing** in the queue right now`);
      const autoplay = queue.toggleAutoplay();
      return interaction.reply(`>>> **Autoplay** \`${autoplay ? 'On' : 'Off'}\``);
    }
}