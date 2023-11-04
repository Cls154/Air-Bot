const { SlashCommandBuilder, CommandInteraction, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("pong")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator), //only allowed for admin users
    execute(interaction) {
      interaction.reply({ content: "pong", ephemeral: true }) //ephermal means only visible to you
    }
}