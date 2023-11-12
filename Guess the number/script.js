let randomNumber = parseInt(Math.random() * 100 +1)

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const StartOver = document.querySelector(".resultParas")

let p = document.createElement("p")
let prevgusses = []
let numgusses = 1  
let gameplay = true

if(gameplay){
    submit.addEventListener("click", function(i){
        i.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alart("Please Enter A Valid Number")
    }
    else if(guess < 1){
        alart("Please Enter A Number More Than 1")
    }
    else if(guess > 100){
        alart("Please Enter A Number Less Than 100")
    }
    else{
        prevgusses.push(guess)
        if(numgusses === 10){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number Was ${randomNumber}`)
            Endgame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(randomNumber === guess){
        displayMessage(`Hurray you guessed it right`)
        Endgame()
    }
    else if(guess > randomNumber){
        displayMessage(`Number is Big`)
    }
    else if(guess < randomNumber){
        displayMessage(`Number is Low`)
    }
}

function displayGuess(guess) {
    userInput.value = ""
    guessSlot.innerHTML += `${guess}, `
    numgusses++
    remaining.innerHTML = `${11 - numgusses}` 
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function Endgame() {
    userInput.value = ""
    userInput.setAttribute("disabled", "")
    p.classList.add("button")
    p.innerHTML = `<h2 id="newgame">Start Over</h2>`
    StartOver.appendChild(p)
    gameplay = false
    Newgame()
}

function Newgame() {
    const newGameButton = document.querySelector('#newgame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevgusses = [];
      numgusses = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numgusses} `;
      userInput.removeAttribute('disabled');
      StartOver.removeChild(p);
  
      playGame = true;
    });
  }
