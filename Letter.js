function Letter(TBD){
    this.character = guess;
    this.hasBeenGuessed = false;
       this.displayGuess.toString = function(){
        if(this.hasBeenGuessed===true){
           return this.character;
        } else {
            return "_";
        }
    }
    this.checkingLetter = function(guess){
        if(guess ===this.character){
            this.hasBeenGuessed = true;
        }
    }
} 


module.exports = Letter;