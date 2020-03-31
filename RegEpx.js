/* ///////////////////////////
//////////////////////////////
//// Regexp / Expresiones Regulares 
//////////////////////////////
*/ ///////////////////////////

// Primer carácter y ultimo iguales (este ejemplo es solo para vocales)
let re = /^(a|e|i|o|u).*\1$/;

let str = 'abcda'
console.log(str + ': ' + re.test(str));
// true

str = 'abcd'
console.log(str + ': ' + re.test(str));
// false

// Primer carácter y ultimo iguales (solo letras)
let reExamp = /^(\w).*\1$/;
// Primer carácter y ultimo iguales (NO letras $%&*´,. )
let reExamp2 = /^(\W).*\1$/;

str = 'xbcdx'
console.log(str + ': ' + reExamp.test(str));
// true

str = 'xbcd'
console.log(str + ': ' + reExamp.test(str));
// false