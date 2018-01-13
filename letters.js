var _ = require('lodash');
var WordLoad = require("./words");
// var WordLoad = require("./test");
var fs = require("fs");

// var result = new WordLoad("start");
// result.getWord();
var count = 0;
function Guess(guess){
	this.display = "";
	this.guess = guess;
		this.getLetter = function(){
		fs.readFile("temp.txt", "utf8", function(err,data){
		if (err) {
    return console.log(err);
  }
	    this.letters = data.split("");
		console.log(this.letters);
		// for (var i = 0; i < this.letter.length; i++) {
		// 	var display = _.concat (this.letters[i]);
		// 	console.log(display);
		// }

		
		 if (this.letters.indexOf(guess) > -1) {
       	console.log("Match!");



       }
       	else if (count < 6){
       		console.log("No Match");
       		count++
       		console.log(count);
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