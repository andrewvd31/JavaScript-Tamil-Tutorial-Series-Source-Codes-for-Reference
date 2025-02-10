// imp! Remove the /* */ (Comments) to check the code in the browser

/* console.log("Hello world"); */

//note: It is considered a good practice to declare variables before use.

//title: Automatic Variable Declaration
/* newVar1 = "Hello world";
x = 6;
y = 5;
z = x + y;
console.log(z); */

//title: Use of var keyword to declare variables

// theory: The var keyword was used in all JavaScript code from 1995 to 2015.
// theory: The var keyword should only be used in code written for older browsers.

/* var newVar2 = "Hello world"; */

/* var x = 6;
var y = 5;
var z = x + y;
console.log(z); */

//title: Use of let keyword to declare variables

//note: The let and const keywords were added to JavaScript in 2015.

/* let newVar3 = "Hello world"; */

//note: Let variables cannot be reassigned

/* let newVar4 = "Hello world";
let newVar4 = "Hello world 3";
console.log(newVar4); */

//title: Difference between var and let variables

//theory: var variable declaration is function scoped
//theory: let variable declaration is block scoped

//note: This will be taught in the next video

//title: Use of const to declare variables

/*const newConst = "New constant";
newConst = "New Constant 2";
console.log(newConst);*/

//note: Constant variables cannot be redeclared

//note: But let variables can be redeclared

/* let newLet = "New constant";
newLet = "New Constant 3";
console.log(newLet); */