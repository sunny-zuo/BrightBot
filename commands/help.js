exports.run = (client, message, args) => {
	const embed = new Discord.RichEmbed()
		embed.setTitle("__Commands__")
		embed.setColor(0x0000FF)
		embed.setDescription("Here is a list of all the commands the bot will respond to.")
		embed.setFooter("Developed by darkstar#7270. View my code: https://github.com/sunny-zuo/BrightBot", "https://image.flaticon.com/icons/svg/25/25231.svg")
		embed.addField("-help", "Lists commands.", true)
		embed.addField("-say", "Bot will say what it is given", true)
		embed.addField("-dice", "Roll dice. Use format 1d6 where 1 is the number of dice rolled, and 6 is the max number (1-6). Cannot roll more than 9 dice at a time.")
	message.channel.send({embed});
}
