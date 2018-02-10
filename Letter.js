function Letter(wordChar){
    this.character = wordChar;
    this.hasBeenGuessed = false;
    this.renderCharacter/*.toString*/ = function(char){
        if(this.hasBeenGuessed===true){
            return this.character;
        } else {
            return "_";
        }
    }
    this.checkGuess = function(guess){
        if(guess ===this.character){
            this.hasBeenGuessed = true;
            // console.log(this.hasBeenGuessed);
            // console.log(this.character);
        } else {
            // console.log("Wrong letter");
        }
    }
} 

// var letterA = new Letter("a");
// // console.log(letterA);

// letterA.checkGuess("b");
// letterA.renderCharacter();
// letterA.hasBeenGuessed = false;
// letterA.checkGuess("a");

module.exports = Letter;