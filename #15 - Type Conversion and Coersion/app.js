// note: Type Conversion - We manually convert types in JavaScript

// note: Type Coercion - Browser automatically converts type in JavaScript

//note: Adding string with number gives concatenated string as result (Javascript automatically converts number to string datatype).

//note: For Manual Type Conversion: Use Number(), String(), Boolean()

//note: Type of NaN will be a number.

//imp! The purple color in the browser denotes a number and the light blue or white number denotes a string.

//note: We cannot convert something to undefined or null. We can only convert to a number, string or boolean.

//note: We only rarely do Manual type conversion in JavaScript.

//note: If subtraction is performed between a string and a string, it returns number as the output.

console.log('56' + '67'); // 5667 (string + string = string)
console.log(5 + '6'); // 56 (number + string = string)
console.log(5 + 6 + '6') // 566 (number + string + string = string)
console.log('45' - '5'); // 40 (string - string = number)
console.log('38' * '21'); // 798 (string * string = number)
console.log('254' / '5'); // 50.8 (string / string = number)