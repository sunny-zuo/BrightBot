//Import the discord.js and cleverbot module
const Discord = require('discord.js');
const Cleverbot = require('cleverbot-node');
//Creates instance of discord client
const client = new Discord.Client();

const cleverbot = new Cleverbot; //declares cleverbot as an instance of Cleverbot
cleverbot.configure({botapi: process.env.CLEVER_TOKEN}); //token for cleverbot api

//Causes bot to start reacting to messages after ready is given
client.on('ready', () => {
    console.log('I am ready!');
    client.user.setGame('-help') //once ready, set's game status to -help so people can know the commands
});

//Event listener for messages
client.on('message', message => {
    var messageSplit = message.content.split(" "); //splits the message with a space as the seperator into an array
    var mentionsBrightBot = false; //bool whether the bot was mentioned in the message
    var brightMentionNum; //the case where the bot was mentioned
    for (var i = 0; i < messageSplit.length; i++) { //for loop that runs the length of the message array
        if (messageSplit[i] === 'BrightBot,' || messageSplit[i] === 'BrightBot' || messageSplit[i] === 'BrightBot!' || messageSplit[i] === 'BrightBot.' || messageSplit[i] === 'BrightBot?') {
           //for above, if the message contains any of the phrases listed
            mentionsBrightBot = true; //set the mention status to true
            brightMentionNum = i; //remember where it was mentioned
            console.log("mentions brightbot");
        }
    }
    if (!mentionsBrightBot && messageSplit[0] == "-say") {
        var messageContent;
        messageSplit.splice(0, 1);
        messageContent = messageSplit.join(" ");
        message.channel.send(messageContent);
    }
    //console.log(message.author.tag);
    if (mentionsBrightBot && message.author.tag != 'BrightBot#6286') {
        var messageContent; //variable to keep the message content
        
        messageSplit.splice(brightMentionNum, 1); //removes the part where trigger text was mentioned so the cleverbot api doesn't get confused
        messageContent = messageSplit.join(" "); //joins the message split array with a space as a seperator for a proper sentence
        console.log(messageContent);
        cleverbot.write(messageContent, (response) => {
            message.channel.startTyping(); //shows that the bot is typing in chat
            setTimeout(() => {
            console.log(response.output);
            message.channel.send(response.output).catch(console.error); //sends the response to chat
            message.channel.stopTyping(); //stop showing that the bot is typing
            }, 2000); //bot will wait 2 seconds before responding to make it appear that it is thinking, can be removed
        });
    }
        
    if (message.content === 'ping') {
    	message.channel.send('pong');
  	}
    if (message.content === '-help') {
        message.channel.send('Talk to me! Just use BrightBot (with correct capitalization) in your message and I will respond!')
    }
});

client.login(process.env.BOT_TOKEN); //token of the bot that is set from heroku. If you don't plan on using heroku replace the text in the brackets with your bot token
