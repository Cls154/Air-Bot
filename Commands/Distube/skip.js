const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("skip")
    .setDescription("skip the current song"),
    async execute (interaction, client) {
      const queue = client.distube.getQueue(interaction);
      if (!queue) return interaction.reply(`>>> There is **nothing** in the queue right now`);
      try {
        const song = await queue.skip();
        return interaction.reply(`>>> **Skipped!** Next up **${song.name}**`);
      } catch (err) {
        return interaction.reply(`${err}`);
      }
    }
}
