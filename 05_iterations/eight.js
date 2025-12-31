const myNums =[1,2,3,4,5];

// // const total = myNums.reduce( function (acc,currval){
// //     console.log(`acc :${acc} and currval :${currval}`);  
// //     return acc+currval;
// // },0);
// // console.log(total);
// //Arrow function:

const total = myNums.reduce((acc,currval)=>acc+currval,0)
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
const totalPrice = shoppingCart.reduce((acc,item)=>acc+item.price,0);
console.log(totalPrice);


