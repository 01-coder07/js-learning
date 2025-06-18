const obj ={
    username:"Harshit",
    course:999,
    location:"Haldwani",
    welcomeMessage :function(){
     console.log(`${this.username},Hi cutie,How are you`);
    }
}
// obj.welcomeMessage();

// const chai = function(){
//     let username = "Harshit";
//     console.log(this.username);
// }

// const chai =() => {
//     let username = "Harshit"
//     console.log(this);
// }
// chai()

const add = (num1,num2) =>{
  console.log(num1 + num2);
}
add(2,3)
// other way to denote arrow function
// () => ()  ::: Here its implicit, we don not write return here
//objects () => ({   })
