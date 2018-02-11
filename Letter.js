function Letter(wordChar){
    this.character = wordChar;
    this.hasBeenGuessed = false;
} 

//method to render each letter when evoked from Word constructor
Letter.prototype.renderCharacter = function(){
    if(this.hasBeenGuessed===true){
        return this.character + " ";
    } else {
        return "_  ";
    }
}

Letter.prototype.checkGuess = function(guess){
        if(guess ===this.character){
            this.hasBeenGuessed = true;
           
           
            // return this.hasBeenGuessed;
            return this.hasBeenGuessed;
          
          
        } /*else {
            console.log("Wrong letter");
        }*/
    }


module.exports = Letter;