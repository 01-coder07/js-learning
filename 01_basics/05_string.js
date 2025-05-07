let name ="Harshit"
let repoCount = 50;
//console.log(name + repoCount);
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);
//string is an object so oe.lengther way of making strings are:

const gameName = new String(`I am- ** elephant.`);
//console.log(gameName.__proto__);
//console.log(gameName.length);
//console.log(gameName[0]);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,4)
//console.log(newString);

const mereNaam = "My Panda"
//console.log(mereNaam.slice(-7,-2));

const teraNaam = "      Shivam      "
console.log(teraNaam.trim());

const url = "https://hitesh.com/hitesh%20chodhary";
console.log(url.replace('%20','-'));
console.log(url.includes('https'));

console.log(gameName.split('**'));







