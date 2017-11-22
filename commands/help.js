exports.run = (client, message, args) => {
	message.channel.send({embed: {
		"color": 3447003,
		"title": "__Commands__",
		"description": "Here is a list of all the commands the bot will respond to.",
		"fields": [{
			"name": "-help",
			"value": "Lists commands.",
			"inline": true
		}, 
		{
			"name": "-say",
			"value": "Bot will say what it is given.",
			"inline": true
		},
		{
			"name": "-dice",
			"value": "Roll dice. Use format 1d6 where 1 is number of dice, and 6 is the highest number."
		}],
    	"footer": {
      		"icon_url": "https://image.flaticon.com/icons/svg/25/25231.svg",
      		"text": "Developed by darkstar#7270. View my code: https://github.com/sunny-zuo/BrightBot"
    	}
	}});
}
