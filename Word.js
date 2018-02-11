var letter = require("./Letter.js");

function Word(word){
    //take in the word and split it into an array of letters
    var wordLetters = word.split('');
     this.wordLetterArray = wordLetters;
     //create an array of letter objects
     this.lettersArray = [];
     //create a string of guesses
     this.guessedWord = [];
    //  this.output="";
    
}

//method to create an array of letter objects
Word.prototype.createArray = function(){
    for(i=0;i<this.wordLetterArray.length;i++){
        this.lettersArray.push(new letter (this.wordLetterArray[i]));
    }
}

// //method to evoke renderCharacter function from the Letter Constructor
// Word.prototype.toString = function(){    
//     // var output = "";
//     for (j=0;j<this.lettersArray.length;j++){
//        this.output += this.lettersArray[j].renderCharacter();
//         }  
//     // return output;  
//     console.log(this.output);  
// }

Word.prototype.guess = function(guess) {
    // this.guessesMade += guess;
    for (k=0;k<this.lettersArray.length;k++){
        //call checkGuess method on the letter cosntructor 
        
        this.lettersArray[k].checkGuess(guess);
        // this.toString();
        // var guessedLetter = this.lettersArray[k].renderCharacter();
        // console.log(this.guessedLetter);
        // this.guessedWord.push(this.guessedLetter);
       
        // console.log(this.lettersArray[k]);
        // console.log(this.output);
        // this.guessedWord += this.lettersArray[k];
      
      
    }
    //    console.log(this.guessedWord);  
    this.toString();
}

//method to evoke renderCharacter function from the Letter Constructor
Word.prototype.toString = function(){    
    var output = "";
    for (j=0;j<this.lettersArray.length;j++){
       output += this.lettersArray[j].renderCharacter();
        }  
    // return output;  
    console.log(output);  
}


var newWord = new Word("bread");
// console.log(newWord.wordLetterArray);
newWord.createArray();
// newWord.lettersArray[0].hasBeenGuessed = true;
newWord.toString();
newWord.guess("b");
// newWord.guess("r");
// newWord.guess("d");

// newWord.guess("d");

// newWord.lettersArray[0].hasBeenGuessed = true;
// newWord.lettersArray[3].hasBeenGuessed = true;
// newWord.lettersArray[4].hasBeenGuessed = true;

// newWord.toString();


module.exports = Word;