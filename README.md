# Hangman Game Using Command Line Interface
## Project Overview

Create a Hangman command-line game using constructor functions.
![capture](https://user-images.githubusercontent.com/31745567/36181995-117acecc-10ed-11e8-8911-9d926979006c.JPG)


## Technology Stack
* JavaScript 
* Node.js
* npm packages
    * [prompt](https://www.npmjs.com/package/prompt): used for getting an input from a player        
    * [colors](https://www.npmjs.com/package/colors): used for styling game commands
  
## Installation
Since it is a command line game , you will have to clone the repo.

All required dependencies are captured in a `package.json` file. Simply run `npm install` to play.
## Comments
* This was a tough assignment mainly due to constant looping and checking. 
* Learned a lot about working with JS constructors, especially using the keyword `this`.
* Incorporated user input validation using `RegExp` as one of the `prompt` parameters.

## Challenges
* Could not refactor all `for loops` into `forEach` in the Word constructor.

## Backlog
* Checking if a letter has already been guessed.
* Displaying an array of incorectly guessed letters
* Refactoring all functions in the `index.js` into an object.

## Feedback and Questions
 * I welcome overall code structure feedback, especially if there are glaring inefficiencies that would benefit from refactoring.
