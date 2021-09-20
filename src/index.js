/* imported modules */
const Discord = require("discord.js")

/* config */
const { prefix, token } = require("../config/config")

const client = new Discord.Client({ partials: ["MESSAGE", "REACTION"] })

client.on("debug", () => { })
client.on("error", () => { })
client.on("warn", () => { })

client.login(token)