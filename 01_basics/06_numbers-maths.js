const score = 400
// console.log(score);

// console.log(typeof score);


const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString());
// console.log(typeof balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));

// ++++MATHS++++

console.log(Math.abs(-4)) //absolute val (sirf negative wale positive honge)
console.log(Math.abs(4)) //absolute val (sirf negative wale positive honge)


console.log(Math.round(45.59))
console.log(Math.ceil(45.59))
console.log(Math.floor(45.59))

console.log(Math.random); // always between 0 and 1

console.log(Math.random());
console.log((Math.random()*10) +1 ); // +1 to prevent '0.0x'

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

// conclusion at the end of vid
