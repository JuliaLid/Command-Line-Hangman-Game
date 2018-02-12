var Word = require("./Word.js");
var prompt = require('prompt');
var colors = require("colors/safe");
var words = ["NEMO", "MARLIN", "DORY", "CRUSH", "NIGEL",'BUBBLES', "SQUIRT"];
var newWord;


prompt.message = colors.white("?");
// prompt.delimiter = colors.white("><");

console.log("Welcome to Hangman!")
console.log("'FINDING NEMO' edition");
console.log("Guess the names of the characters from this iconic Pixar movie!");
console.log("========================================================");

function startGame(){
    remainingGuesses = 10;
    var randomWord = selectWord();
    newWord = new Word(randomWord);
    console.log(newWord);
    // console.log(newWord.wordLetterArray.length);
    newWord.createArray();
    newWord.toString();
}

function userGuesses(){
    prompt.start();
    
    prompt.get({
    properties: {
        name: {
        description: colors.white("Guess a letter")
        }
    }
    }, function (err, result) {
        var guessedLetter = (result.name).toUpperCase();
        newWord.guess(guessedLetter);
        
        newWord.didWeFindTheWord();

        if (newWord.guessedWord ===false && remainingGuesses>1){
            remainingGuesses --;
            console.log("You have " + remainingGuesses + " guesses left!");
            console.log("\n ");
            userGuesses();
        } else if (newWord.guessedWord === true){
            console.log("Way to go! You know your Pixar characters!");
        } else {
            console.log("Sorry, dude. You're out of guesses!")
        }
    });
   
}

function selectWord(){
    var wordChoice = words[Math.floor(Math.random()* words.length)];
    return wordChoice;
};




startGame();

userGuesses();
