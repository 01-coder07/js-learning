//object singleton
//Object.create()

//object literal

const obj ={
    "name kya hai":"Harshit",
    "Last name":"Pant",
    age:20,
    location:"Haldwani",
    Email:"Harshitpant2005@gmail.com",
};
// console.log(obj.age);
// console.log(obj["Email"]);
// console.log(obj["location"]);
// console.log(obj["Last name"]);
//how do you add symbol to an object

//symbol
const mySym = Symbol("symbol1")
 const curious = {
    name:"Doctor curious",
    [mySym]:"info about something",
    email:"harsh@123gmail.com",
    password:"abcdefghijkl",
 };
//  console.log(curious[mySym]);
// console.log(curious);
// curious.email="harshitpant@2005gmail.com";
// console.log(curious);
// Object.freeze(curious);
// curious.name="hsbaadbadna";
// console.log(curious);

 
curious.greet=function(){
    console.log("Hey I am a new User");
}
console.log(curious.greet());

curious.greetTwo = function(){
    console.log(`Hey I a new User , my name is :${this.name}`);
}
console.log(curious.greetTwo());





