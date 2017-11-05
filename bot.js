//Import the discord.js module
const Discord = require('discord.js');
//Creates instance of discord client
const client = new Discord.Client();

//Causes bot to start reacting to messages after ready is given
client.on('ready', () => {
    console.log('I am ready!');
});

//Event listener for messages
client.on('message', message => {
    if (message.content === 'Hi BrightBot!') {
    	message.channel.send('Hi' + message.author);
  	}
});

// Token of the bot from Heroku
client.login(process.env.BOT_TOKEN);
