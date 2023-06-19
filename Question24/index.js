//24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).

let array1 = [];
let array2 = [];

for( i=0; i<=100 ; i++) {
    if (i%2 ===0){
        array1.push(i)
    }
    else
    array2.push(i)
}

console.log("Even:",array1);
console.log("Odd:",array2);