const { SlashCommandBuilder, CommandInteraction, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("play")
    .setDescription("Add a song")
    .addStringOption(option => option.setName('songname').setDescription("Song to be played").setRequired(true)),
    execute(interaction, client) {

      const songName = interaction.options.getString('songname');

      // YASSIN SPECIAL REQUEST!!!!
      const atUser = `<@${interaction.member.id}>`
      const botSayings = [
        `${atUser} awesome pick, my friend! 🤩`,
        `${atUser} you nailed it with that song selection buddy! 😜`,
        `Brilliant choice, ${atUser}! 🤘`,
        `${atUser} you've got great taste in music, dude! 👌`,
        `Ooooh! ${atUser} excellent song selection, my man! 😍`,
        `${atUser} that is a killer track, bro. 👊`,
        `DAMN!!! ${atUser} you really know how to pick'em, pal. 😎`,
        `${atUser} impressive song choice, boss 🫡`,
        `I can tell, ${atUser} you've got an ear for magnificent music 😉`,
        `Who the fuck put ${atUser} on the tunes....?... 🤬` //single negative....
      ]

      if (!interaction.member.voice.channel) {
        return interaction.reply("You need to be in a voice channel to use this command.");
      }

      client.distube.play(interaction.member.voice.channel, songName, {
        member: interaction.member,
        textChannel: interaction.channel,
        interaction,
      });

      interaction.reply(`${botSayings[Math.floor(Math.random() * botSayings.length)]}`);
    }
}
