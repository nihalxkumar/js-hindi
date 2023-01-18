let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber); for finding type
// console.log(valueInNumber); for finding output
// "hitesh" = NaN
// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// true => 1; false => 0

let isLoggedIn = "hitesh"
let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);
// "hitesh" => true
// "" => false
// 1 => true   0 => false

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);  33
// console.log(typeof stringNumber); type of ayega number. kyuki humne String() mein convert kiya

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
 // agar string first mein hai toh sabhi ko string mein treat kiya jayega
 // agar string last mein hai toh pehle jo operation hai voh hojayega fir string lagega
 // iss tarah ka code acceptable nahi hai. yeh sirf exams ke liye theek hai. real life mein koi merge request pull nahi karega.
// console.log( (3 + 4) * 5 % 3); 
 // use parenthesis

//tricky conversion. koi sense nahi hai in ka
// console.log(true); --> true
// console.log(+true); ---> 1
// console.log(true+); ---> unexpected token
// console.log(+""); ---> 0

let gameCounter = 100
// ++gameCounter;
// gameCounter++;
console.log(gameCounter);

// read about prefix suffix on mdn
// also check // https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion








