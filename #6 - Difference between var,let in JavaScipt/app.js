//title: SCOPING

/* if (true) {
    var x = 10;
    let y = 20;
} */
/* console.log(x); */ //imp! 10 (accessible)
/* console.log(y); */ //imp! ReferenceError: y is not defined (not accessible)

//title: HOISTING

/* console.log(a); */ //imp! undefined (hoisted but not assigned yet)
/* var a = 5; */

/* console.log(b); */ //imp! ReferenceError: Cannot access 'b' before initialization
/* let b = 10; */

//title: RE-DECLARTION

/* var c = 1; */
/* var c = 2; */ //imp! No error, variable re-declared

/* let d = 1; */
/* let d = 2; */ //imp! SyntaxError: Identifier 'b' has already been declared

/* var e = 5; */
/* console.log(window.a); */ //imp! 5 (global object property)

/* let f = 10; */
/* console.log(window.b); */ //imp! undefined (no global object property)