//singleton object
//const myObj = new Object();
const tinder = {};
tinder.id="124abc";
tinder.name="Darren Sammy";
tinder.isLoggedIn= false;
// console.log(tinder);

const regularUser = {
    email:"abcf@tinder.com",
    fullname :{
       userfullname:{
        first:"Harshit",
        last:"Pant"
       }
    }
}
// console.log(regularUser.fullname.userfullname.first);
const obj1 ={
    1:"a",2:"b"
};
const obj2 = {
    3:"c",
    4:"d"
};
const obj3 = {...obj1,...obj2};
console.log(obj3);
