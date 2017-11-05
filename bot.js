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
    client.user.setGame('-help')
});

//Event listener for messages
client.on('message', message => {
    var messageSplit = message.content.split(" ");
    var mentionsBrightBot = false;
    var brightMentionNum;
    for (var i = 0; i < messageSplit.length; i++) {
        if (messageSplit[i] === 'BrightBot,' || messageSplit[i] === 'BrightBot' || messageSplit[i] === 'BrightBot!' || messageSplit[i] === 'BrightBot.' || messageSplit[i] === 'BrightBot?') {
            mentionsBrightBot = true;
            brightMentionNum = i;
            console.log("mentions brightbot");
        }
    }
    console.log(message.author.tag);
    if (mentionsBrightBot && message.author.tag != 'BrightBot#6286') {
        var messageContent;
        
        messageSplit.splice(brightMentionNum, 1);
        messageContent = messageSplit.join(" ");
        clbot.write(messageContent, (response) => {
            message.channel.startTyping();
            setTimeout(() => {
            console.log(response.output);
            message.channel.send(response.output).catch(console.error);
            message.channel.stopTyping();
            }, Math.random() * (1 - 3) + 1 * 1000);
        });
    }
        
    if (message.content === 'ping') {
    	message.channel.send('pong');
  	}
    if (message.content === '-help') {
        message.channel.send('Talk to me! Just use BrightBot in your message and I will respond!')
    }
});

// Token of the bot from Heroku
client.login(process.env.BOT_TOKEN);
