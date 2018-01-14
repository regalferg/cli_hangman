var _ = require('lodash');
var WordLoad = require("./words");
// var WordLoad = require("./test");
var fs = require("fs");

// var result = new WordLoad("start");
// result.getWord();
var total = 6;
var count = 0;
function Guess(guess){
	this.display = [];
	this.guessed = [];
	this.guess = guess;
	this.getLetter = function(){
		fs.readFile("temp.txt", "utf8", function(err,data){
		if (err) {
    return console.log(err);
  }
	    this.letters = data.split("");
		// console.log(this.letters);
		console.log("\n-------------\n");
		console.log(this.letters);
		if (this.letters.indexOf(guess) > -1) {
       	console.log("Match!");
       	
       	console.log(guess);
       	// var letterGuessed = guess;
       	
       	// this.guessed.push(letterGuessed);
       	// console.log(this.guessed);

       }
       	else if (count < 6){
       		console.log("No Match");
       		count++
       		var guessesLeft = total - count;
       		console.log(`Guesses left: ${guessesLeft}`);
       	}else{
       		console.log("Game Over!")
       		process.exit(); 
       	}
		


        })



       };
}

module.exports = Guess;

// var letterResult = new Guess("m");
// letterResult.getLetter();