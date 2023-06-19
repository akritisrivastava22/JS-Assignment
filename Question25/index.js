/* 25. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
    - The same groups apply to both men and women.
    - Underweight: BMI is less than 18.5
    - Normal weight: BMI is 18.5 to 24.9
    - Overweight: BMI is 25 to 29.9
    - Obese: BMI is 30 or more
*/

function calculateBMI(weight, height) {
    const heightInMeters = height / 100; // Convert height from centimeters to meters
    const bmi = weight / (heightInMeters * heightInMeters); // Calculate BMI
    
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }
  
  // Example usage:
  const weight = prompt("Enter weight"); // Weight in kilograms
  const height = prompt("Enter Height"); // Height in centimeters
  
  const bmiResult = calculateBMI(weight, height);
  console.log("BMI Result:", bmiResult);
  