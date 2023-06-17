//13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

const input1 = prompt("enter your age");

if (input1 >= 18 ) {
    console.log("'You are old enough to drive");
}
else{
    const input2 = 18- input1
    console.log(`You need to wait ${input2} years to turn 18`);
}