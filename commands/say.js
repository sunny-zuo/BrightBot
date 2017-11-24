exports.run = (client, message, args) => {
	message.channel.send(message.content).catch(console.error);
}