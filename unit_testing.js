//Testing Letter constructor 

var Letter = require('./Letter.js');

myLetter = new letter.letter('a');
console.log(myLetter);
console.log(myLetter.character);

//Testing Word constructor
var Word = require('./Word.js');

var newWord = new Word("bread");
newWord.createArray();
newWord.toString();
newWord.guess("b");
console.log(this.output);


