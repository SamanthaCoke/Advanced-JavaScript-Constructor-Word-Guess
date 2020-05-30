var inquirer = require("inquirer");
let Word = require("./Word");
let newWord = new Word("word")


function askForLetter() {
    let wordDisplay = newWord.wordDisplay();
    console.log(wordDisplay.join(" "));
    inquirer
    .prompt([
      {
        type: "input",
        name: "letter",
        message: "Guess a letter",
      }
    ])
    .then((answer) => {
        console.log(answer.letter)
        let guessRight = newWord.guess(answer.letter);
        wordDisplay = newWord.wordDisplay();
        if(guessRight) {
            console.log("You guess right")
            if(wordDisplay.includes("_")) {
                askForLetter(); 
            } else {
                console.log("You won, the end");
                return; 
            }
            
        } else {
            console.log("wrong")
            askForLetter(); 
        }
      // Use user feedback for... whatever!!
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log("bummer", error);
      } else {
        // Something else when wrong
        console.log("terrible", error);
      }
    });
}

askForLetter();

