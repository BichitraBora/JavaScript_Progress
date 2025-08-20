const accountId = 12345
let accountEmail = "98c@gmail.com"
var accountPassword = "54321"
accountCity = "Delhi"
let accountState;
console.log(accountId, accountEmail, accountPassword, accountCity)

// In tabler form
console.table([accountId, accountEmail, accountPassword, accountCity])

// accountId = 2 (changes noy allowed as "accountId" is declared as "const")
accountEmail = "vishu@gmail.com"
accountPassword = "16565"
accountCity = "Jaipur"
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// Don't use "var"