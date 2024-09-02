// Task 1: Variables and Data Types

let employeeName = “Olivia Rodrigo”;
const employeeID = 1;
var  isActive = false;

console.log(employeeName, typeof (employeeName))
console.log(employeeID, typeof (employeeID))
console.log(isActive, typeof (isActive))



// Task 2: Compound Data Types

let products = ["Keyboard", "Mouse", "Charger"]
const productdetails = {
    name: "Keyboard",
     price: 30,
      inStock = true}

      console.log(products, productdetails);

// Task 3: Assignment Operators

let accountBalance = 5000;

accountBalance += 500;
console.log(accountBalance)

accountBalance -= 400;
console.log(accountBalance)

accountBalance /= 2;
console.log(accountBalance)

accountBalance *= 1.5;
console.log(accountBalance)

accountBalance %= 100;
console.log(accountBalance)

// Task 4: Comparison Operators

let employeeScore1 = 90
let employeeScore2 = 95

console.log(employeeScore1 > employeeScore2);
console.log(employeeScore1 < employeeScore2);
console.log(employeeScore1 >= employeeScore2);
console.log(employeeScore1 <= employeeScore2);
console.log(employeeScore1 === employeeScore2);
console.log(employeeScore1 !== employeeScore2);

// Task 5: Logical Operators

let hasKeyCard = true;
let hasPermission = false;

console.log(hasKeyCard && hasPermission);
console.log(hasKeyCard || hasPermission);
console.log(!hasPermission);
console.log(hasKeyCard && !hasPermission);
