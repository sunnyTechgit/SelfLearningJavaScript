const accountId = 12321343;

let accountEmail = "abc.google.com"; // Can update but cannot redeclare

var accountName = "ABX"; // Can update and redeclare (avoid using var , Global scope)

accountOwner = "ZMS"; // Not recommended (creates a global variable)

console.log(accountEmail);

console.table([
    accountEmail,
    accountId,
    accountName,
    accountOwner
]);