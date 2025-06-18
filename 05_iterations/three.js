//for of
//[" "," "," "]
//[{},{},{}]
const arr = [1,2,3,4,5];
for(const num of arr){
    console.log(num);
}

const greeting = "hello world"
for(const val of greeting){
    if(val == " ") break;
    console.log(`the char is ${val}`);
}
//Map
const map = new Map()
map.set("IN","India");
map.set("USA","United states of america");
map.set("ENG","ENGLAND");
console.log(map);
for(const [key,value] of map){
    console.log(key,':-',value);
    
}

