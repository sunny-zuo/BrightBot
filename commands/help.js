const Discord = require('discord.js');

exports.run = (client, message, args) => {
	const embed = new Discord.RichEmbed()
		.setTitle("__Commands__")
		.setColor(0x0000FF)
		.setDescription("Here is a list of all the commands the bot will respond to.")
		.setFooter("Developed by darkstar#7270. View my code: https://github.com/sunny-zuo/BrightBot", "https://image.flaticon.com/icons/svg/25/25231.svg")
		.addField("-help", "Lists commands.", true)
		.addField("-say", "Bot will say what it is given", true)
		.addField("-dice", "Roll dice. Use format 1d6 where 1 is the number of dice rolled, and 6 is the max number (1-6). Cannot roll more than 9 dice at a time.");
	message.channel.send({embed}).catch(console.error);
}
