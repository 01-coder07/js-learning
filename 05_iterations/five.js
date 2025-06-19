const coding = ["Js","Python","C++","Java","ruby"];
// coding.forEach( function (val){
//  console.log(val);
//           //call back fn = a function which doesnt have a name
// })
 coding.forEach( (item,index,arr) => {
    console.log(item,index,arr);
    
  })

const myCoding = [
    {
       language:"Js",
       name:"javascript",
    },
    {
       language:"Java",
       name:"java",
    },
    {
       language:"python",
       name:"py"
    }
]
myCoding.forEach( (item)=>{
  console.log(item.language);
  
})
