require("dotenv").config();

console.log('Running...\n');

const {Client, Intents, Message} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.login(process.env.BOTTOKEN);

client.on('ready', READY_DISCORD);
client.on('messageCreate', BORKLOL)

function READY_DISCORD() {
    console.log('Hooray! Run successfully');
}

function BORKLOL(msg) {
    console.log(msg.content)
    if(msg.author.id === "765509287954481152")
    { 
        if(msg.content === "give treat"){return msg.reply('*NOMNOMNOM*');}
        else {return msg.reply('**BORK!**');}
    }
}