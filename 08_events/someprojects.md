# Color change Project

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
## Project - 2 Key Press Display 

``` javascript 
const div = document.querySelector('#insert');
document.addEventListener('keydown',function(e){
  div.innerHTML = e.key;
})
```