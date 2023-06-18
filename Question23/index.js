//23. Write a program to check that the number given by the user is a prime number or not.

function isPrime(number) {
    // Check if the number is less than 2
    if (number < 2) {
      return false;
    }
  
    // Iterate from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      // If the number is divisible by any other number, it is not prime
      if (number % i === 0) {
        return false;
      }
    }
  
    // If the number is not divisible by any other number, it is prime
    return true;
  }
  
  // Get input from the user
  const userInput = parseInt(prompt("Enter a number:"));
  
  // Check if the user input is a prime number
  if (isPrime(userInput)) {
    console.log(`${userInput} is a prime number.`);
  } else {
    console.log(`${userInput} is not a prime number.`);
  }
  