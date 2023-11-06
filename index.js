const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");
const { DisTube, Song, Queue } = require("distube");

const { loadEvents } = require('./Handlers/eventHandler');
const { loadCommands } = require('./Handlers/commandHandler');

require('dotenv/config');

const { Guilds, GuildMembers, GuildMessages, GuildVoiceStates } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages, GuildVoiceStates],
  partials: [User, Message, GuildMember, ThreadMember]
})

client.distube = new DisTube(client, {
  leaveOnStop: false,
  emitNewSongOnly: true,
  emitAddSongWhenCreatingQueue: false,
  emitAddListWhenCreatingQueue: false,
})

client.commands = new Collection();

client.login(process.env.TOKEN).then(() => {
  loadEvents(client);
  loadCommands(client);
});