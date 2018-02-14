//letter constructor
function Letter(wordChar){
    this.character = wordChar;
    this.hasBeenGuessed = false;
} 

//method to render each letter when evoked from Word constructor
Letter.prototype = {
    constructor: Letter,
    renderCharacter: function(){
        if(this.hasBeenGuessed===true){
        return this.character + " ";
        } else {
        return "_  ";
        }
    },

    //method to check the guess against underlying letter and update its hasBeenGuessed property
    checkGuess: function(guess){
        if(guess ===this.character){
            this.hasBeenGuessed = true;
            return this.hasBeenGuessed;
        } 
    }
}
module.exports = Letter;