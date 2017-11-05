//Import the discord.js module
const Discord = require('discord.js');
const Cleverbot = require("cleverbot-node");
//Creates instance of discord client
const client = new Discord.Client();

const clbot = new Cleverbot;
clbot.configure({botapi: process.env.CLEVER_TOKEN});

//Causes bot to start reacting to messages after ready is given
client.on('ready', () => {
    console.log('I am ready!');
});

//Event listener for messages
client.on('message', message => {
    var messageSplit = message.content.split(" ");
    for (var i = 0; i < messageSplit.length; i++) {
        
    }
    if (message.content === 'Hi BrightBot!') {
    	message.channel.send('Hi' + message.author);
  	}
});

// Token of the bot from Heroku
client.login(process.env.BOT_TOKEN);
