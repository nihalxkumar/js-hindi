// Date -> Obj
// single moment in time
// milliseconds from 1st Jan 1970
// TC39 is working on Temporal

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toTimeString());

// let myCreatedDate = new Date(2023,0,23); // month 0 se start hote hain 
// let myCreatedDate = new Date(2023,0,23,5,3); 
let myCreatedDate = new Date("2023-01-14"); // mm dd yy  mein 1 start hota hain
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime())


// console.log(Date.now()/1000)
// console.log(Math.floor(Date.now()/1000)); // to remove decimal val

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()); // wrong
// console.log(newDate.getMonth()+1); // end user should not be confused


// console.log(`Which day of the week? ${newDate.getDay()} and the time is ${newDate.getTime()}`);

console.log(newDate.toLocaleString('default', {weekday: "long"}))
console.log(newDate.toLocaleString('default', {weekday: "narrow"}))
console.log(newDate.toLocaleString('default', {weekday: "short"}))

console.log(newDate.toLocaleString('default', {weekday: "short"}))


