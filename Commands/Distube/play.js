const { SlashCommandBuilder, CommandInteraction, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("play")
    .setDescription("Add a song")
    // .setDefaultMemberPermissions(PermissionFlagsBits.Administrator) //only allowed for admin users
    .addStringOption(option => option.setName('songname').setDescription("Song to be played").setRequired(true)),
    async execute(interaction, client) {

      const songName = interaction.options.getString('songname');

      client.distube.play(interaction.member.voice.channel, songName, {
        member: interaction.member,
        textChannel: interaction.channel,
        interaction
      })
    }
}
