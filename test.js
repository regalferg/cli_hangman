
var fs = require("fs");

function WordLoad(start){
	this.start = start;
	this.randomWord = "";
	this.getWord = function(){
		fs.readFile("wordbank.txt", "utf8", function(err,data){
			if (err) {
    return console.log(err);
  }
			var wordArr = data.split(',');


            var getRandomWord = function() {
                return wordArr[Math.floor(Math.random() * wordArr.length)];
            };
            var rWord = getRandomWord();
            this.randomWord = rWord;
            fs.writeFile("temp.txt", this.randomWord, function(err) {
                if (err) {
                    return console.log(err);
                }

            })

        })

};


}
// var guessed = new WordLoad(guess)
// var result = new WordLoad();
// result.getWord();
// var result = new WordLoad("c");
// result.getWord();



// console.log( new WordLoad() );





module.exports = WordLoad;