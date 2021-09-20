/* imported modules */
const {Client, Intents} = require("discord.js")

require("dotenv").config();
const { BOT_TOKEN } = process.env;

/* config */
const { prefix } = require("../config/config");

const client = new Client({
    intents: [Intents.FLAGS.GUILDS]
})

client.on("ready", ()=>{
    client.user.setActivity(`@${client.user.username} | 1.0.0`)
    console.log(`${client.user.username} is working!`)
})

client.on("message", ()=> {
    
})

client.on("debug", () => {});
client.on("error", () => {});
client.on("warn", () => {});

client.login(BOT_TOKEN);
