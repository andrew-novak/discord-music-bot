/* imported modules */
const Discord = require("discord.js");

require("dotenv").config();
const { BOT_TOKEN } = process.env;

/* config */
const { prefix } = require("../config/config");

const client = new Discord.Client({ partials: ["MESSAGE", "REACTION"] });

client.on("debug", () => {});
client.on("error", () => {});
client.on("warn", () => {});

client.login(BOT_TOKEN);
