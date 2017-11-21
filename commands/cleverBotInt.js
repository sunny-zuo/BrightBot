const Cleverbot = require('cleverbot-node');

const cleverbot = new Cleverbot; //declares cleverbot as an instance of Cleverbot
cleverbot.configure({botapi: process.env.CLEVER_TOKEN}); //token for cleverbot api

exports.run = (client, message, messageContent) => {
	var messageSplit = messageContent.split(" "); //splits the message with a space as the seperator into an array
    var brightMentionNum; //the case where the bot was mentioned
    for (var i = 0; i < messageSplit.length; i++) { //for loop that runs the length of the message array
        if (messageSplit[i] === 'BrightBot,' || messageSplit[i] === 'BrightBot' || messageSplit[i] === 'BrightBot!' || messageSplit[i] === 'BrightBot.' || messageSplit[i] === 'BrightBot?') {
           //for above, if the message contains any of the phrases listed
            brightMentionNum = i; //remember where it was mentioned
            var messageCleaned; //variable to keep the message content
        
        	messageSplit.splice(brightMentionNum, 1); //removes the part where trigger text was mentioned so the cleverbot api doesn't get confused
        	messageCleaned = messageSplit.join(" "); //joins the message split array with a space as a seperator for a proper sentence
        	cleverbot.write(messageCleaned, (response) => {
            message.channel.startTyping(); //shows that the bot is typing in chat
            setTimeout(() => {
            console.log(response.output);
            message.channel.send(response.output).catch(console.error); //sends the response to chat
            message.channel.stopTyping(); //stop showing that the bot is typing
            }, 2000); //bot will wait 2 seconds before responding to make it appear that it is thinking, can be removed
			});
        }
        else {
        	return;
        }
}
}