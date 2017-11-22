exports.run = (client, message, args) => {
	var helpMessage = ("```\n **Commands** \n -help : Lists all the commands \n -say : Bot will say what you tell it to say \n You can talk to me! Just mention BrightBot with exact capitalization in your message and I'll respond. \n I'm a bot developed by darkstar#7270. Find me [on Github!](https://github.com/sunny-zuo/BrightBot) \n ```")
	message.channel.send(helpMessage).catch(console.error);
}
