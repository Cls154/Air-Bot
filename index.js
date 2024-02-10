const { Client, GatewayIntentBits, Partials, Collection, ActivityType } = require("discord.js");
const { DisTube } = require("distube");

const { loadEvents } = require('./Handlers/eventHandler');
const { loadCommands } = require('./Handlers/commandHandler');
const { SpotifyPlugin } = require("@distube/spotify");
const { SoundCloudPlugin } = require("@distube/soundcloud");

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
  plugins: [
    new SpotifyPlugin({
      emitEventsAfterFetching: true
    }),
    new SoundCloudPlugin(),
  ]
})

client.commands = new Collection();

client.login(process.env.TOKEN).then(() => {
  loadEvents(client);
  loadCommands(client);
  client.user.setPresence({
    activities: [{
      type: ActivityType.Custom,
      name: "🥰 Under construction",
    }],
    status: "dnd"
  })
});