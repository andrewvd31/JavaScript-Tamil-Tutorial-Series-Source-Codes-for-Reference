// imp! Remove the /* */ (Comments) to check the code in the browser

//title: SCOPING

/* if (true) {
    var x = 10;
    let y = 20;
} */
/* console.log(x); */ //soln: 10 (accessible)
/* console.log(y); */ //soln: ReferenceError: y is not defined (not accessible)

//title: HOISTING

/* console.log(a); */ //soln: undefined (hoisted but not assigned yet)
/* var a = 5; */

/* console.log(b); */ //soln: ReferenceError: Cannot access 'b' before initialization
/* let b = 10; */

//title: RE-DECLARTION

/* var c = 1; */
/* var c = 2; */ //soln: No error, variable re-declared

/* let d = 1; */
/* let d = 2; */ //soln: SyntaxError: Identifier 'b' has already been declared

/* var e = 5; */
/* console.log(window.a); */ //soln: 5 (global object property)

/* let f = 10; */
/* console.log(window.b); */ //soln: undefined (no global object property)