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

