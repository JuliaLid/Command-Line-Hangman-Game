# Hangman Game Using Command Line Interface
## Project Overview

Create a Hangman command-line game using constructor functions.
![capture](https://user-images.githubusercontent.com/31745567/36114558-efb942ac-0ff5-11e8-957b-9b8a215ef6f1.JPG)

## Technology Stack
* JavaScript 
* Node.js
* npm packages
    * [prompt](https://www.npmjs.com/package/prompt): used for getting an input from a player        
    * [colors](https://www.npmjs.com/package/colors): used for styling game commands
  
## Comments
* This was a tough assignment mainly to constant looping and checking. 
* Learned a lot about working with JS constructors, especially using the keyword `this`.
* Incorporated user input validation using `RegExp` as one of the `prompt` parameters.

## Challenges
* Printing whether the user's guess was correct or incorrect. I tried utilizing the existing functions. However, `for loop` would `console.log` 
* Could not refactor `for loops` into `forEach`.

## Feedback and Questions
* I would like help refactoring at least one `for loop` in the `Word.js` file.
* Please provide feedback on the best way to return 'CORRECT' or 'INOCRRECT' when user provides an input.
 * I welcome overall code structure feedback, especially if there are glaring inefficiencies that would benefit from refactoring.
