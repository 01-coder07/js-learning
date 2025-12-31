const myNums = [1,2,3];
const total = myNums.reduce((acc,currVal)=>{
    console.log(`Acc : ${acc} and currVal : ${currVal}`);
    
    return acc + currVal;
},0);
console.log(total);

const shoppingCart = [
    {
          itemName:"Js course",
          price:1999,
    },
    {
      itemName:"py course",
      price:1500,
    },
    {
      itemName:"datascience",
      price:12999,
    }
]
const totalPrice = shoppingCart.reduce((acc,currVal)=>{
   return acc + currVal.price;
},0);
console.log(totalPrice);



