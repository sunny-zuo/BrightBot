exports.run = (client, message, argsArray) => {
	const args = argsArray[0];
	var rollInfo = args.split("");
	var rollCount = rollInfo[0];
	var rollMax;
	if (rollInfo[1] === "d") {
		rollInfo.splice(0,2)
		rollMax = rollInfo.join("");
		for (var i = 1; i < rollCount; i++) {
			var roll;
			roll = Math.floor(Math.random() * rollMax) + 1;
			message.channel.send("Roll " + i + ":" + roll).catch(console.error);
			console.log("Roll " + i + ":" + roll);
		}
	}
	else {
		message.channel.send("That is not a valid command.")
	}

}