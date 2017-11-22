exports.run = (client, message, args) => {
	var messageArray;
	messageArray.push("```")
	messageArray.push("**Commands**")
	messageArray.push("-help : Lists commands")
	messageArray.push("-say : I'll say what you want me to!")
	messageArray.push("You can talk to me! Just mention BrightBot with exact capitalization in your message")
	messageArray.push("I'm a bot developed by darkstar#7270. Find me [on Github!](https://github.com/sunny-zuo/BrightBot)")
	messageArray.push("```")

	message.channel.send(messageArray).catch(console.error);
}
