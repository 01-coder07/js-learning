//primitive (call by value)
// 7 types : String, Number, Boolean, null, undefined, Symbol ,BigInt


//Nonprimitive(Call by reference)

//Arrays  ,Objects  , Functions
const arr =["harshit",'age'];
console.log(typeof arr);

let obj = {
    name:'harshit',
    age:21
}
console.log(typeof obj);

const myFunc = function(){
    console.log("hello!");
}
console.log(typeof myFunc);


// Javascript is dynamically typed . as you dont have to explicity write the datatypes like we do in java . for ex :int,boolean etc 
//example
const score = 40
console.log(typeof score);

const scoreCard = 30.5
console.log(typeof scoreCard);

const loggedIn = true;
console.log(typeof loggedIn);

const outsideTemp = null;
console.log(typeof outsideTemp);

//console.log(typeof outsideTemp);

let pi;
// console.log(typeof pi);


let oneSymbol = Symbol('123')
//console.log(typeof oneSymbol);

let anotherone = Symbol('123')
//console.log(oneSymbol===anotherone);

const bigInteger = 12345463773893n;
//console.log(typeof bigInteger);


//console.log(typeof bigInteger);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(Primtive) ,Heap(Non Primitive)
 let MYname= "harshit"
 let another = MYname
 console.log(another);
