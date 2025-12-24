let randomNum = parseInt(Math.random()*100+1)
const userInput = document.querySelector('#guessField')

const guess = document.querySelector('#guess')
const submit = document.querySelector("#subt" )
const lowOrHi = document.querySelector('.lowOrHi')
let guessSlot = document.querySelector('.guesses')
let remaining = document.querySelector('.lastResult')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')
let prevGuess= []
let numGuess = 1
let playGame = true

if(playGame){
   submit.addEventListener('click',function(e){
     e.preventDefault()

     const guess = parseInt(userInput.value)
     validateGuess(guess)
   })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number')
  }else if(guess<1){
    alert('Please enter a no.more than 1')
  }else if(guess>100){
    alert('Please enter a number less than 100')
  }else{
    prevGuess.push(guess)
    if(numGuess===10){
      displayGuess(guess)
      displayMessage(`Game over.Random no. was ${randomNum}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess===randomNum){
    displayMessage("  You guessed it right")
    endGame()
  }else if(guess>randomNum){
    displayMessage()
    displayMessage(" No. is high")
  }else{
    displayMessage(" No. is low")
  }
}

function displayGuess(guess){
  userInput.value = " ";
  guessSlot.innerHTML += `${guess}  `
  
  remaining.innerHTML = `${10-numGuess}`
  numGuess++;
}
 
function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = " ";
  userInput.setAttribute('disabled', " ")
  p.classList.add('button')
  p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
    randomNum = parseInt(Math.random()*100+1)
    prevGuess = []
    guessSlot.innerHTML = " "
    remaining.innerHTML = 10
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
   lowOrHi.innerHTML = ""
    numGuess = 1
  })

}



