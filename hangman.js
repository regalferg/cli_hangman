var inquirer = require("inquirer");
var WordLoad = require("./words");
var Guess = require("./letters");



function startGame(){

	inquirer.prompt([{
		type: "list",
		choices: ["start","exit"],
		name: "start",
		message: "Welcome to Hangman! Please select start to begin!"
	}]).then(function(answers){
		
		if (answers.start === "start") {
			var result = new WordLoad("start");
			result.getWord();
			playGame();
		}
	});
}


function playGame(){
	inquirer.prompt([{
	type:"input",
	name: "guess",
	message: "Please guess a letter"
}]).then(function (answers){

	var letterResult = new Guess(answers.guess);

	letterResult.getLetter();
	// letterResult.createArr();
	console.log("\n-------------\n");
	console.log("incoming playGame() call");

	playGame();
})

}




startGame();

// var result = new WordLoad("start");
// result.getWord();