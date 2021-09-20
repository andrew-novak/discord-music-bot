/* imported modules */
const { Client, Intents } = require("discord.js");
const { joinVoiceChannel } = require("@discordjs/voice");

require("dotenv").config();
const { BOT_TOKEN } = process.env;

/* config */
const { prefix } = require("../config/config");

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES
  ]
});

client.on("ready", () => {
  client.user.setActivity(`@${client.user.username} | 1.0.1`);
  console.log(`${client.user.username} is working!`);
});

client.on("messageCreate", message => {
  if (
    !message.content.startsWith(prefix) ||
    message.author.bot ||
    !message.guild
  )
    return;
  const args = message.content.slice(prefix.length).split(" ");
  const command = args.shift().toLowerCase();

  if (command == "join") {
    const { channelId } = message.member.voice;
    if (!channelId)
      return message.channel.send(":warning: You are not in a channel.");
    const connection = joinVoiceChannel({
      channelId,
      guildId: message.guild.id,
      adapterCreator: message.guild.voiceAdapterCreator
    });
    message.channel.send("Connecting to the channel");
  }
});

client.on("debug", () => {});
client.on("error", () => {});
client.on("warn", () => {});

client.login(BOT_TOKEN);
