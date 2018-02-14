//required files
var Word = require("./Word.js");
var selectWord = require("./randomWord.js");
var prompt = require('prompt');
var colors = require('colors');

//global variables
var newWord;

//Welcome messages on file load
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

    var property = {
        name: 'input',
        message:colors.green.bold('Guess a letter'),
        validator: /^[^a-z]*([a-z])[^a-z]*$/i,
        warning: colors.red.bold('Must be a single letter')
    };

    prompt.get(property, function (err, result) {
        var guessedLetter = (result.input).toUpperCase();//capture guessed letter
        
        newWord.guess(guessedLetter); //calling guess method in Word function 
        checkIfCorrect(guessedLetter);//checking if the guess is in the newWord letter object array
        
        newWord.wordIsComplete(); //checking if the word has been guessed
        
        //game ending conditions
        if (newWord.guessedWord === true && remainingGuesses >=1){
            console.log("\n\n"+ colors.cyan.bold("Way to go! You know your Pixar characters!"));
            resetGame();
        } else if (remainingGuesses <1) {
            console.log(colors.red.bold("Sorry, dude. You're out of guesses! Better luck next time."));
            resetGame();
        } else {
            gamePlay()
        }
    });
}

//function to reset the game based on user's direction
function resetGame(){
    prompt.start();
    prompt.message = colors.green.bold("?");
    var property = {
        name: 'yesno',
        message:colors.green.bold('Would you like to play again?'),
        validator: /yes*|no]?/,
        warning: colors.red.bold('Must respond yes or no')
    };
   
    prompt.get(property,function (err, result) {
        
        if(result.yesno==="yes"){
            startGame();
        } else {
            console.log(colors.yellow.bold("Thanks for playing. Now go and watch 'Finding Nemo'!"));
        }
    });
}

//function to check whether the guess is correct or incorrect
function checkIfCorrect(guessltr){
    if (newWord.wordLetterArray.indexOf(guessltr)!= -1){
        console.log(colors.green.bold('CORRECT :)')+ "\n");
    } else {
       console.log(colors.red.bold('INCORRECT :(') + "\n");
       remainingGuesses --;
       console.log(colors.red.bold("You have " + remainingGuesses + " guesses left!") + "\n");
    }
}
//start game
startGame();
