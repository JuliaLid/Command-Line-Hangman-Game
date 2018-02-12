//selecting a random word
var words = ["NEMO", "MARLIN", "DORY", "CRUSH", "NIGEL",'BUBBLES', "SQUIRT"];
var selectWord = function(){
    var wordChoice = words[Math.floor(Math.random()* words.length)];
    return wordChoice;
};


module.exports = selectWord;