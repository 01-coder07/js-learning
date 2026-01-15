# Project Related to DOM

## Project Link
[click Here] https://stackblitz.com/edit/dom-project-chaiaurcode-fw18gigt?file=3-DigitalClock%2Findex.html

# Solution Code

## Project -1

```javascript
 let body = document.querySelector('body');
let buttons = document.querySelectorAll('.button');
buttons.forEach((button)=>{
button.addEventListener('click',(e)=>{
  if(button.id===e.target.id){
  body.style.backgroundColor = e.target.id;
  };
});
});
```
## Project -2
```javascript
const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
   
  if(height === '' || height <0 || isNaN(height)){
    result.innerHTML = 'Invalid';
  } 
  else if(weight === '' || weight <0 || isNaN(weight)){
    result.innerHTML = 'Invalid';
  }
  else{
    const bmi = (weight / (height * height) * 10000).toFixed();
    result.innerHTML=`<span> ${bmi}</span>`;
  }
})
```
## Project-3
```
Javascript

const clock =document.querySelector('#clock');

setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
},1000);
```

## Project -4
``` 
javascript
 let randomNumber = parseInt(Math.random() * 100 +1);


const guessSlot = document.querySelector('.guesses');
const guessLeft = document.querySelector('.lastResult');
const submitGuess = document.querySelector('#subt');
const lowOrHigh = document.querySelector('.lowOrHi');
const userInput = document.querySelector('#guessField');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let flag = true;
let noOfGuess = 1;

if(flag){
  submitGuess.addEventListener('click',function(e){
    e.preventDefault();
    let guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  })
}

function validateGuess(guess){
 if(isNaN(guess)){
  alert('Please enter valid number');
 }
 else if (guess < 1){
   alert('Enter number greater than or equal to 1');
 }
 else if(guess > 100){
   alert('Enter number less than or equal to 100');
 }
 else{
   prevGuess.push(guess);
   if(noOfGuess===11){
     cleanUpGuess(guess);
     displayMessage(`Game over: Random number was ${randomNumber}`);
     endGame();
   }
   else{
     cleanUpGuess(guess);
     checkGuess(guess);
   }
 }
}

function checkGuess(guess){
  if(guess < randomNumber ){
    displayMessage('Higher');
  }
  else if(guess > randomNumber){
    displayMessage('Lower');
  }
  else{
    displayMessage('Congrats!!  You Guessed The Number');
    endGame();
  }
}

function cleanUpGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += ` ${guess} , `;
    noOfGuess++;
    guessLeft.innerHTML = `${11-noOfGuess}`;
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
 userInput.value='';
 userInput.setAttribute('disabled','');
 p.classList.add('button');
 p.innerHTML = `<h2 id = 'startgame'>Start new game</h2>`
 startOver.appendChild(p);
 flag = false;
 startGame();
}

function startGame(){
   const newGame = document.querySelector('#startgame');
   newGame.addEventListener('click',function(e){
   randomNumber = parseInt(Math.random() * 100 +1);
   prevGuess = [];
   noOfGuess = 0;
   guessSlot.innerHTML = '';
   guessLeft.innerHTML = `${10-noOfGuess}`;
   userInput.removeAttribute('disabled');
   startOver.removeChild(p);
   flag = true;
   })
}
```
## Project -5

# Code 
 ``` javascript
 const randomColor  = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++) {
     color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
let colorInterval;
const start = document.querySelector('#start');
start.addEventListener('click',function(){
   colorInterval= setInterval(()=>{
     document.body.style.backgroundColor = randomColor();
  },1000);
})
const stop = document.querySelector('#stop');
stop.addEventListener('click',function(){
  clearInterval(colorInterval);
})
```
## Project - 6 Key Press Display 

``` javascript 
const div = document.querySelector('#insert');
document.addEventListener('keydown',function(e){
  div.innerHTML = e.key;
})
```
