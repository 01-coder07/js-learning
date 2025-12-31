// const myNums = [1,2,3,4,5,6,7,8,9,10];
// // const newN = myNums.map((num)=>num+10)

// // we can use .map().map() as well;
// const newN = myNums.map((num)=>{ 
//     return  num +10})
//     .map((num)=>{return num*2})
//     .filter((num)=> num>30 && num<35)
// console.log(newN);

const myarr = [10,20,30,40,50];

const newarr = myarr.filter((num)=> num >20).map((num)=> num + 10 * 4);
console.log(newarr);
