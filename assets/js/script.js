// function for the button to start 
var timerEl = document.getElementById('countdown');
var startEl = document.querySelector("#start")
// timer starts the timer 
    // reset timer  
function countdown() {
    var timeLeft = 10;
    var timeInterval = setInterval(function () {
        // YOUR CODE HERE
        // keep -1 to the time left 
        timeLeft--;
        // having a text with the time left + and the string
        timerEl.textContent = timeLeft + " seconds remaining";
        // if the time left 0 stop the counter and display the message
        if (timeLeft === 0) {
        clearInterval(timeInterval);
        }
        //setting the speed of counter
    }, 1000);
}

var wordList = ["cake", "tree", "cookies"];
var i = Math.floor(Math.random() * wordList.length)
var word = wordList[i];    
    //split the word ? 
var quiz = word.split('') //correct 
var guesses = [];

function game() {    
    for (i = 0; i < quiz.length; i++) {
        var li = document.createElement("li");
        li.textContent = "_";
        document.querySelector(".word").appendChild(li);
    }
    console.log(quiz);
    // for (var i = 1; i < word.length; i++) {
    //     guesses.push("_");
    // }
}

function renderGuesses(input) {    
  // put the guesses array on the page
    for (i = 0; i < input.length; i++) {
        if (guess == quiz[i]) {
            input[i].textContent = quiz[i];
        }
    } 
}


// event listener for keydown, call check guess
function keydownAction(event) {
        // The key property holds the value of the key press
    var keyPress = event.key;
    return keyPress;
}

function checkGuess() {
    // what key was pressed, if in the quiz array, 
    document.addEventListener("keydown", keydownAction);
    var guesses = keyPress;
    renderGuesses(guesses);
    // check if theyve won
}

    // (word list with array or sth else).split('')
    // key press 
        // if key press match with the word 
            // shows the word 
        // else 
            // nothing nownowee
    // if all the words are shown 
        // win the game 
        // win ++
    // else if (timer === 0)
        // lose 
    // else 
        //lose ++

// press the button (main)
startEl.addEventListener("click", function () {
    countdown(); 
    game(); 
    checkGuess();
});
    // start the game and the timer 
    // timer funcion timer () 
    // start the game funciton gamebox () 

// local store the win and loss 
    // reset the local store 


