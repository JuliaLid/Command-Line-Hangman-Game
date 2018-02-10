var letter = require("./Letter.js");

function Word(word){
    this.letterArray = [];
    this.wordLetters = function(){

    }
    this.processGuess = function(char){

       var characterMatch = new Letter(TBD);//At which point do we use Letter constructor?
       for (i=0; i<this.letterArray.length;i++){
           characterMatch.checkingLetter(i);
       }
    }
}

















module.exports = Word;