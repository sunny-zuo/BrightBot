//Import the discord.js module
const Discord = require('discord.js');
const Cleverbot = require('cleverbot-node');
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
    var mentionsBrightBot = false;
    for (var i = 0; i < messageSplit.length; i++) {
        if (messageSplit[i] === 'BrightBot,' || messageSplit[i] === 'BrightBot' || messageSplit[i] === 'BrightBot!' || messageSplit[i] === 'BrightBot.') {
            mentionsBrightBot = true;
            console.log("mentions brightbot");
        }
    }
    if (mentionsBrightBot) {
        clbot.write(message.content, (response) => {
        message.channel.startTyping();
        setTimeout(() => {
            console.log(response.output);
            message.channel.send(response.output).catch(console.error);
            message.channel.stopTyping();
        },
    });
        
    }
    if (message.content === 'ping') {
    	message.channel.send('pong');
  	}
});

// Token of the bot from Heroku
client.login(process.env.BOT_TOKEN);
