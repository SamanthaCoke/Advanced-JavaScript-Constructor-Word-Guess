let Letter = require('./letter.js')
function Word(word){
    let splitword = word.spilt('');
    let wordArray = [];
    splitword.forEach(function(element){
        let letter = new Letter(element);
        wordArray.push(letter);
    })
this.stringWord = word;
this.word = wordArray;
this.wordDisplay = function(){
    let display = [];
    this.word.forEach(function(element){
        display.push(element.display());
    })
    return display;
}
this.guess =function(letter){
    let found = false;
    this.word.forEach(function(element){
        if(element.check(letter)){
            found = true;
        }
})
return found;
}
}
module.exports = Word;