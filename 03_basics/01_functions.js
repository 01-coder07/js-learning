function add(num1,num2){
    // console.log(num1+num2);
}
add(null,3)

function multiple(n1,n2){
    return n1 * n2;
}
const result = multiple(6,5);
// console.log(result);

function username(name="Sam"){
    
  return `your name is ${name}`;
}
const name = username();
// console.log(name);

function cartValue(val1,val2,...num1){
    return num1;
}
console.log(cartValue(100,200,300,400));

//passing object to function
 const user = {
   username:"Harshit",
   price:900
 };
 function handleObjects(anyObject){
    console.log(`my Name is ${anyObject.username} ,prices is ${anyObject.price}`);
 }
 handleObjects(user);
 //array in function
 function handleArray(anyarray){
  return 4*anyarray[0];
 }
 console.log(handleArray([1000,200,300,400,320]));
 