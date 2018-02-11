var letter = require("./Letter.js");

function Word(word){
    //take in the word and split it into an array of letters
    var wordLetters = word.split('');
     this.wordLetterArray = wordLetters;
     //create an array of letter objects
     this.lettersArray = [];
}


Word.prototype.renderWord = function(){
    for(i=0;i<this.wordLetterArray.length;i++){
        this.lettersArray.push(new letter (this.wordLetterArray[i]));
    }
}
Word.prototype.toString = function(){    
    var output = "";
    for (j=0;j<this.lettersArray.length;j++){
            // lettersArray[j].renderCharacter();
        output += this.lettersArray[j].renderCharacter();
        //    console.log(arrayLetterObject.character);
        }  
    console.log(output);  
}


Word.prototype.guess = function(letter) {
    
}

var newWord = new Word("bread");
// console.log(newWord.wordLetterArray);
newWord.renderWord();
// newWord.lettersArray[0].hasBeenGuessed = true;
newWord.toString();


// console.log(newWord.lettersArray[0]);




module.exports = Word;