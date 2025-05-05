// note: == performs TYPE COERCION

const user = prompt("Enter a number: ");
// theory: typeof prompt() will be String.
if (user === 5) console.log('Yes');
//note: Not equal to:
if (user !== 10) console.log('No');