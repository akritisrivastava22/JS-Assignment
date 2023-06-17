//09. Boolean value is either true or false.
//- Write three JavaScript statement example which provide truthy value.
//- Write three JavaScript statement example which provide falsy value.

// 3 statement example for truthy value
const a = 20
const b= 10 
const c= a>b;
console.log(c);

const x = true;
const y = false;
const z = x || y;
console.log(z);

const text = 'Hello, World!';
const hasText = Boolean(text);
console.log(hasText);

//3 statements for falsey value
const var1 = 20
const var2 = 10 
const var3 = a < b;
console.log(var3);

const boolvar1 = false;
const boolvar2 = true;
const boolvar3 = x && y;
console.log(boolvar3);

const text1 = ""
const hasText1 = Boolean(text1);
console.log(hasText1);