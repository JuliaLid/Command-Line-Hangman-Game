var Letter = require("./Letter.js");
var colors = require('colors');

function Word(word){
    //take in the word and split it into an array of letters
    var wordLetters = word.split('');
    this.wordLetterArray = wordLetters;
     //create an array of letter objects
     this.lettersArray = [];
     //condition to check whether the word has been guessed
     this.guessedWord;
}

//method to create an array of letter objects
Word.prototype = {
    constructor: Word,
    createArray: function(){
        for(i=0;i<this.wordLetterArray.length;i++){

        this.lettersArray.push(new Letter (this.wordLetterArray[i]));
        }
    },
        //method to check the player's guess and then call the render toString function
    guess: function(guess) {
        for (j=0;j<this.lettersArray.length;j++){
            //call checkGuess method on the letter cosntructor 
            this.lettersArray[j].checkGuess(guess);
        }
        this.toString();
    },

    //method to evoke renderCharacter function from the Letter Constructor
    toString: function(){    
        var output = "";
        for (k=0;k<this.lettersArray.length;k++){
        output += this.lettersArray[k].renderCharacter();
        }  
        console.log(colors.yellow.bold(output)+"\n");  
    },

    //method to check if the word has been guessed
    wordIsComplete: function() {
        for (l=0;l<this.lettersArray.length;l++){
            if(this.lettersArray[l].hasBeenGuessed == false){
                this.guessedWord = false;
            } else {
            this.guessedWord = true;
        }
        }  
    }
}


module.exports = Word;