const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("volume")
    .setDescription("set the volume of the music")
    .addIntegerOption(option => option.setName('volume').setDescription("Volume of the music").setRequired(true)),
    execute (interaction, client) {
      const queue = client.distube.getQueue(interaction);
      if (!queue) return interaction.reply(`>>> There is **nothing** in the queue right now`);
      let volume = interaction.options.getInteger('volume');
      if (volume < 0) volume = 0;
      queue.setVolume(volume);
      return interaction.reply(`>>> **Volume** set to \`${volume}\``);
    }
}