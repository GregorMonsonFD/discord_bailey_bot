require("dotenv").config();

console.log('Running...\n');

const {Client, Intents} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.login(process.env.BOTTOKEN);

client.on('ready', READY_DISCORD);
client.on('message', BORKLOL)

function READY_DISCORD() {
    console.log('Hooray! Run successfully');
}

function BORKLOL(msg) {
    msg.reply('BORK!');
}