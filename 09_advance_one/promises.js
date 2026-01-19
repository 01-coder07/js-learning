//Promises consist of two things : Consume or Create
// Creation of Promise
const promiseOne = new Promise(function(resolve,reject){
    //Do an async task 
    //DB calls,cryptography ,network
    setTimeout(()=>{
         console.log('Async task is executed');
         resolve();
    },1000)
})

promiseOne.then(function(){
 console.log('Promise is consumed');
})

new Promise((resolve,reject)=>{
 setTimeout(()=>{
 console.log('Async task 2');
 resolve();
 },1000)
}).then(()=>{
    console.log('Async task 2 resolve');
})

//3rd promise
const promiseThree = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve({username:"Harshit",email:"harshit@example.com"})
  },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

//4th promise
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(()=>{
      let error = true;
      if(!error){
        resolve({user:"HarshitPant",password:12345});
      }else{
        reject('ERROR:Something went wrong');
      }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then(function(username){
 console.log(username)
})
.catch((error)=>{
    console.log(error);
})
.finally(()=> console.log('The Promise is either resolved or rejected'));

//promise 5
const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let error = false;
      if(!error){
        resolve({user:"JS",password:12345});
      }else{
        reject('ERROR:JS went wrong');
      }
    },1000)
})

async function consumePromiseFive(){
     try{
        const response = await promiseFive;
        console.log(response);
     }
     catch(error){
        console.log(error);
     }   
}
consumePromiseFive()

// async function getUsers(){
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
    
//   } catch (error) {
//     console.log('E',error);
//   }
// }
// getUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
  return response.json();
})
.then((data)=>{
 console.log(data);
})
.catch((err)=> console.log(err))