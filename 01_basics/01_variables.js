const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; // variable decleared but without value. hence, undefined.

// accountId = 2 // not allowed because const

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId); // execute one by one

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) // execute bulk in table form


/*
Prefer not to use var
because of issue in block scope and functional scope
*/
