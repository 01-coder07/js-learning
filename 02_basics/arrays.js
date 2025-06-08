//arrays

const myarr = [1,2,3,4];
const myarr2 = new Array(1,2,3,4);
// myarr.push(5);
// myarr.pop()
// myarr.unshift(9);
// myarr.shift();
// console.log(myarr.includes(9));
// console.log(myarr.indexOf(3));
//console.log(myarr.includes(9));


const newarray = myarr.join();
console.log(typeof(myarr));

console.log(typeof newarray);

const hero = ['ironman','hulk','Cap'];
const dc = ['superman','batman','queen'];
const allhero = [...hero,...dc]
console.log(allhero);


