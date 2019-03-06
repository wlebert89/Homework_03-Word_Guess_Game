var wordBank = ["asteroid", "comet", "constellation", "cosmos", "eclipse", "galaxy", "interstellar", "meteor", "nebula", "neutrino", "pulsar", "quasar", "satellite", "supernova", "universe"];

var acceptedCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
 
// computer chooses a word from the wordBank array.
var randomNumber = Math.floor(Math.random() * wordBank.length);

// the random number is translated into a word from the wordBank.
var chosenWord = (wordBank[randomNumber]);

var activeArray = [];

var guessList = [];

var guessesLeft = 12;

var wins = 0;


console.log("The word is: " + chosenWord);

// for each letter of the chosenWord, push "_" into an empty array.
for (var i = 0; i < chosenWord.length; i++){
    activeArray.push("_");  
}

// onload function used to write the empty word into the document.
window.onload = function startup(){
    document.getElementById("current-word").innerHTML = activeArray.join(" ");
};

// function to reset the game.
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
    document.getElementById("current-word").innerHTML = activeArray.join(" ");
    console.log("The word is: " + chosenWord);
}

// when the user presses a key...
document.onkeyup = function(event) {
    var userGuess = event.key;
    // check to see if user guess matches any of the letters in the chosenWord.
    if (acceptedCharacters.indexOf(userGuess) !== -1){
        // check to see where the user guess is located in the chosenWord.
        if (chosenWord.indexOf(userGuess) !== -1){
            for (var j = 0; j < chosenWord.length; j++){
                // Replace "_" with the acutal letter, for all occurances of the letter in the chosenWord.
                if (userGuess === chosenWord[j]){
                    activeArray[j] = userGuess;
                } 
            }
        // if user guess is incorrect, guessesLeft -- and log incorrect letter to guessList.    
        } else if (guessList.indexOf(userGuess) === -1){
            guessList.push(userGuess);
            guessesLeft --;
            document.getElementById("user-guess").innerHTML = guessList.join(" . ").toUpperCase();               
            document.getElementById("guesses-remaining").innerHTML = guessesLeft;
        } 
        // if user guesses all correct letters before guessesLeft =0, wins ++ and reset the game.
        if (activeArray.join("") === chosenWord){
            wins ++;
            document.getElementById("wins").innerHTML = wins;
        }
        // if guessesLeft <=0, reset the game.
        if (activeArray.join("") === chosenWord || guessesLeft <= 0){
            reset();
        }
        // write the array to the document.
        document.getElementById("current-word").innerHTML = activeArray.join(" ");
        
    } 
}