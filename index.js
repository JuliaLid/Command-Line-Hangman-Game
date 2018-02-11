var Word = require("./Word.js");
var prompt = require('prompt');
var colors = require("colors/safe");
var words = ["woody", "buzz", "jessie", "slinky", "Bullseye"];
var newWord;

prompt.message = colors.white("Question!");
prompt.delimiter = colors.white("><");

console.log("Welcome to Hangman - the 'Toy Story' characters edition");
console.log("Guess the names of the characters from this iconic Pixar movie!");
console.log("=======================");

function startGame(){
    var randomWord = selectWord();
    newWord = new Word(randomWord);
    console.log(newWord);
    console.log(newWord.wordLetterArray.length);
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
        newWord.guess(result.name);
        var checkWord = newWord.isComplete();
        console.log(checkWord);
        // if(checkWord){
        //     console.log("Winner!")
        // } 
        userGuesses();
        
    });
   
}

function selectWord(){
    var wordChoice = words[Math.floor(Math.random()* words.length)];
    return wordChoice;
};

startGame();
userGuesses();
