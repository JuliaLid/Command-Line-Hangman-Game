//required files
var Word = require("./Word.js");
var selectWord = require("./randomWord.js");
var prompt = require('prompt');
var colors = require('colors');

//global variables

var newWord;


// var schema = {
//     properties: {
//       name: {
//         pattern: /^[a-zA-Z]+$/,
//         message: 'Guess must a letters',
//         required: true
//       },
//     }
//   };

//Welcome messages
console.log(colors.magenta.bold("Welcome to Hangman!"));
console.log(colors.magenta.bold("'FINDING NEMO' edition"));
console.log(colors.magenta.bold("Guess the names of the characters from this iconic Pixar movie!"));
console.log(colors.magenta.bold("****************************************************************"));

//function to start the game
function startGame(){
    remainingGuesses = 10;
    var randomWord = selectWord();
    newWord = new Word(randomWord);
    // console.log(newWord);//*****Un-comment this line to see the letters */
    newWord.createArray();
    newWord.toString();
    gamePlay();
}

//function for main game play
function gamePlay(){
    prompt.start();
    prompt.message = colors.green.bold("?");
    prompt.get({
    properties: {
        name: {
        description: colors.green.bold("Guess a letter")
        }
        // validator: /^[a-zA-Z]+$/,
        // warning: "Must provide a letter"
    }
    }, function (err, result) {
        var guessedLetter = (result.name).toUpperCase();//capture guessed letter
        newWord.guess(guessedLetter); //calling guess method in Word function 
        
        newWord.wordIsComplete(); //checking if the word has been guessed
        
        //game ending conditions
        if (newWord.guessedWord ===false && remainingGuesses>1){
            remainingGuesses --;
            console.log(colors.red.bold("You have " + remainingGuesses + " guesses left!"));
            console.log("\n ");
            gamePlay();
        } else if (newWord.guessedWord === true){
            console.log(colors.cyan.bold("Way to go! You know your Pixar characters!"));
            startGame();
        } else {
            console.log(colors.grey.bold("Sorry, dude. You're out of guesses! Better luck next time."));
            startGame();
        }
    });
}

//start game
startGame();


