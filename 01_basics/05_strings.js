// modernize code
const name = "hitesh"
const repoCount = 50

// console.log(name + " " + repoCount + " Value");    Outdated method
// backticks a.k.a String Interpolation console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);   Current Method

const gameName = new String('Hitech-HC') // obejct hi deraha hai array nahi hai. Key value pair banayega. length property dega. 

// console.log(gameName[4]);
// console.log(gameName.__proto__);

// console.log(gameName.__proto__);  // if you want to use other functionalities you don't necessarily have to use proto. can do it directly.

// console.log(gameName.length);
// console.log(gameName.toUpperCase); // stag heap concept. original val change nahi horhi
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString= gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(0,4) // can give negative val. // substrign also accepts negative value but ignores it.

const newStringOne = "   hitesh   "  
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
// console.log(url.replace('%20','-'));
// console.log(url.includes('batman'));

console.log(gameName.split('H'));


