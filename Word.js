var letter = require("./Letter.js");

function Word(word){
    //take in the word and split it into an array of letters
    var wordLetters = word.split('');
     this.wordLetterArray = wordLetters;
     //create an array of letter objects
     this.renderWord = function(){
        for(i=0;i<this.wordLetterArray.length;i++){
            var letterObject = new letter (this.wordLetterArray[i]);

            //lettersArray is an array of letter objects
            var lettersArray = [];
            lettersArray.push(letterObject);
        }

        for (j=0;j<lettersArray.length;j++){
            // lettersArray[j].renderCharacter();
            console.log(lettersArray[j]);
            console.log(lettersArray[j].character);
        }    
    }
}


Word.prototype.guess = function(letter) {
    
}
var newWord = new Word("bread");
console.log(newWord.wordLetterArray);
newWord.renderWord();




module.exports = Word;