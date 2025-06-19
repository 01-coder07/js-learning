// const coding=["js","java","python","C"];
// const value = coding.forEach( (item)=>{
//  console.log(item);
// })
// console.log(value);
//filter

const arr = [1,2,3,4,5,6,7,8,9,10];
const newNum= arr.filter( (num)=> {
    return num>4 && num<8
}
)
console.log(newNum);

const newArr =[];
arr.forEach( (nums)=>{
    if(nums>4){
        newArr.push(nums);
    }
})
console.log(newArr);

