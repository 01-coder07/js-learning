//singleton object
//const myObj = new Object();
const tinder = {};
tinder.id="124abc";
tinder.name="Darren Sammy";
tinder.isLoggedIn= false;
// console.log(tinder);

const regularUser = {
    email:"abcf@tinder.com",
    fullname :{
       userfullname:{
        first:"Harshit",
        last:"Pant"
       }
    }
}
// console.log(regularUser.fullname.userfullname.first);
const obj1 ={
    1:"a",2:"b"
};
const obj2 = {
    3:"c",
    4:"d"
};
const obj3 = {...obj1,...obj2};
// console.log(obj3);

const users=[
    {
        id:1,
        email:"h@gmail.com",
    },
    {
        id:1,
        email:"h@gmail.com",
    },
]
// console.log(users[0].email);
// console.log(tinder);
// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));
// console.log(tinder.hasOwnProperty('isLoggedIn'));

const course={
    courseName:"Js",
    price:1299,
    CourseInstructor:'Harshit'
};
//course.courseName
//De-Structuring
const {courseName:Name}=course;
console.log(Name);

//json
// {
//     courseName:"Js",
//     price:1299,
//     CourseInstructor:'Harshit'   
// }
//[
    

//]



