// imp! Refer the Operator Reference Table below for all the operator precedance for symbols

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence */

//theory: Bracket[()] has the highest operator precedance. Anything in the bracket gets done first.

//prog: console.log((90-50)*3);

//theory: +, -, *, /, %, ** operations are done before the comparison operations

//prog: console.log(90 + 29 <= 20 - 40);

//theory: First ** is done before the *, /, and %. After that *, /, % are done before + and -. After that, the addition and subtraction are done as per the operator precedance rule in javascript.

// prog: console.log(8**2+34*5-40) 
//imp! 64+170-40 = 194

//soln: In this, the ** operator gets done first. Then the multiplication(*) operators gets done, and at last, + and - operator gets done and the output will be displayed.

//theory: The mathematical and camparison operators will be executed from left to right except ** (it will be executed from right to left).

//theory: Assignment operators will also be executed from right to left.

//prog: let firstValue,secondValue; firstValue = secondValue = 50-34; console.log(firstValue, secondValue)

//soln: In this, First subtraction is done since it has the highest operator precedance. Next if firstValue = secondValue = 16 is executed from left to right, firstValue = undefined, since secondValue is not defined at the beginning. Now, it is executed from the right to left. So 16 will be assigned to the secondValue variable first and next the first Value variable will be equal to 16. So firstValue and secondValue variable values will be equal to 16.

//theory: To find the average of two numbers

// prog: console.log(90 + 59 / 2);

//soln: Since / has the highest operator precedance, first 59/2 operation is done. Hence the output is not correct for finding the average. So we add bracket to the first two numbers so that the bracket operation is done first.

// prog: console.log((90 + 59) / 2);

// soln: Now the addition operation inside the bracket is done first and hence we get the correct output.