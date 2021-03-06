//Import needed modules
const Discord = require('discord.js');
const fs = require('fs');

//Creates instance of discord client
const client = new Discord.Client();
const prefix = "-";

const commandList = ['help', 'ping', 'say', 'dice']

//Causes bot to start reacting to messages after ready is given
client.on('ready', () => {
    console.log('I am ready!');
    client.user.setGame('-help') //once ready, set's game status to -help so people can know the commands
});

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./commands/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content == "No") {
	  message.channel.send("Yes").catch(console.error);
  }
  if(message.content.indexOf(prefix) !== 0) {
  	if (message.content.indexOf('BrightBot') == 0 && message.content.indexOf('BrightBot.') == 0 && message.content.indexOf('BrightBot?') == 0 && message.content.indexOf('BrightBot!') == 0 && message.content.indexOf('BrightBot,') == 0) {
  		return;
  	}
  	else {
  		let cleverbotCommand = require(`./commands/cleverBotInt.js`);
  		cleverbotCommand.run(client, message, message.content);
  		return;
  	}
  }

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  console.log(command);
  if (commandList.indexOf(command) !== 0) {
  	try {
    	let commandFile = require(`./commands/${command}.js`);
    	commandFile.run(client, message, args);
  	} catch (err) {
    	console.error(err);
 	}
  }
  else {
  	return;
  }
});

client.login(process.env.BOT_TOKEN); //token of the bot that is set from heroku. If you don't plan on using heroku replace the text in the brackets with your bot token
