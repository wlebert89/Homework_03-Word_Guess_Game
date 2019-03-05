var wordBank = ["asteroid", "cosmos", "comet", "constellation", "galaxy", "heliocentric", "interstellar", "meteor"];
        
var randomNumber = Math.floor(Math.random() * wordBank.length);

var chosenWord = (wordBank[randomNumber]);

var activeArray = [];

var guessesLeft = 12;

var wins = 0;

var guessList = [];

// computer chooses a word from the wordBank array.
// chosen word gets broken up into individual letters.
// for each letter of the word, push "_" into an empty array.
// check to see if user guess matches any of the letters in the chosen word.
// if user guess matches, replace "_" with the acutal letter, for all occurances of the letter.
// if user guess is incorrect, guessesLeft --
// if user guesses all correct letters before guessesLeft = 0, wins ++
// create reset function

console.log("The word is: " + chosenWord);

for (var i = 0; i < chosenWord.length; i++){
    activeArray.push("_");
    
}

function reset(){
    randomNumber = Math.floor(Math.random() * wordBank.length);
    chosenWord = (wordBank[randomNumber]);
    guessesLeft = 12;
    activeArray = [];
    guessList = [];
    for (var i = 0; i < chosenWord.length; i++){
        activeArray.push("_");
    }
    document.getElementById("user-guess").innerHTML = guessList.join(" . ").toUpperCase();
    document.getElementById("guesses-remaining").innerHTML = guessesLeft;
    console.log("The word is: " + chosenWord);
}

document.onkeyup = function(event) {
    var userGuess = event.key;

    if (chosenWord.indexOf(userGuess) !== -1){
        for (var j = 0; j < chosenWord.length; j++){
            if (userGuess === chosenWord[j]){
                activeArray[j] = userGuess;
            } 
        }
    } else if (guessList.indexOf(userGuess) === -1){
        guessList.push(userGuess);
        guessesLeft --;
        document.getElementById("user-guess").innerHTML = guessList.join(" . ").toUpperCase();               
        document.getElementById("guesses-remaining").innerHTML = guessesLeft;
    } 
    
    if (activeArray.join("") === chosenWord){
        wins ++;
        document.getElementById("wins").innerHTML = wins;
    }

    if (activeArray.join("") === chosenWord || guessesLeft <= 0){
        reset();
    }
               
    document.getElementById("current-word").innerHTML = activeArray.join(" ");
    
} 

