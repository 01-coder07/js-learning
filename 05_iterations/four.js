const myObj = {
    js:"JavaScript",
    cpp:"c++",
    rb:"ruby"
}
for(const key in myObj){
    //console.log(myObj[key]);
    console.log(`The keys are ${key} , its meaning is  ${myObj[key]}`);
}

const arr =[1,2,3,4]
for(const i in arr){
    console.log(i);
    
}