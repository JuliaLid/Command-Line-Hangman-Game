var letter = require("./Letter.js");

function Word(word){
    //take in the word and split it into an array of letters
    var wordLetters = word.split('');
     this.wordLetterArray = wordLetters;
     //create an array of letter objects
     this.lettersArray = [];
     //create a string of guesses
     this.guessedWord;
    //  this.output="";
    
}

//method to create an array of letter objects
Word.prototype.createArray = function(){
    for(i=0;i<this.wordLetterArray.length;i++){
        this.lettersArray.push(new letter (this.wordLetterArray[i]));
    }
}

//method to check the player's guess and then call the render toString function
Word.prototype.guess = function(guess) {
    // this.guessesMade += guess;
    for (j=0;j<this.lettersArray.length;j++){
        //call checkGuess method on the letter cosntructor 
        this.lettersArray[j].checkGuess(guess);
    }
    this.toString();
}

//method to evoke renderCharacter function from the Letter Constructor
Word.prototype.toString = function(){    
    var output = "";
    for (k=0;k<this.lettersArray.length;k++){
       output += this.lettersArray[k].renderCharacter();
        }  
    console.log(output);  
}


Word.prototype.didWeFindTheWord = function() {
    // console.log(this.lettersArray[0].hasBeenGuessed);
    // console.log(this.lettersArray.letter);
    for (k=0;k<this.lettersArray.length;k++){
        if(this.lettersArray[k].hasBeenGuessed == false){
        this.guessedWord = false;
        // console.log(this.lettersArray[k]);  
        // console.log(this.lettersArray[k].hasBeenGuessed);   
        
        } else {
           this.guessedWord = true;
       }
    }  
};


// var newWord = new Word("Bullseye");
// newWord.createArray();
// newWord.toString();
// newWord.guess("e");
// newWord.didWeFindTheWord();
// console.log(this.guessedWord);
// newWord.guess("r");
// newWord.guess("d");
// newWord.isComplete();
module.exports = Word;