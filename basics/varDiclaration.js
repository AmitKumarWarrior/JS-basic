const accountID=123546
let accountEmail="Akk71864@gmail.com"
var accountPassword="25423"
accountName="amit kumar"
let accountLocation
/*this is the ways how can i decleare variables
 but we only use "let" and "const" and we not use var because 
 it don't understand Block Scope {this is under a block scope} */ 
 
 //now we changing declared values let se what happen

// accountID this give me an error because its under const
 accountEmail="ABC@gmail.com"
 accountPassword="35462"
 accountName="Amit"
 //to print these values
 console.log(accountID);
 // it have an another way to print these value
 console.table([accountEmail,accountPassword,accountID,accountName,accountLocation])