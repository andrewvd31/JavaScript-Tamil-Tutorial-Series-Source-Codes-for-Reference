// note: Normal String Concatenation
/*const demoVariable = 'Hello';
  console.log("I'm" + hello + "from India");
*/

// note: Template Literals
/* const demoVariable1 = 'Hello';
const name1 = 56;
const name2 = 90;
console.log(`I am ${demoVariable1} from India`);
console.log(`The value of ${name1 + name2} is 146`);
*/

//note: Multi-line strings
/* console.log('Hello \n\DemoName \n\lines') */
/* soln: Hello 
         DemoName 
         lines */
//imp!: This can be easily added with the help of template Literals
console.log(`Hello
DemoName
lines`)
/* soln: Hello 
         DemoName 
         lines */
//imp!: For multiline strings, Always use template Literals

//theory: Template Literals are available in JavaScript from ES6
//theory: Single quotes and double quotes won't work inside the template literal
//theory: We can also use backticks for any regular strings