/* 15. Write a program which can give grades to students according to theirs scores:
    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F
*/

const score = prompt("Enter the student's score:");

let grade;

if (score >= 80 && score <= 100) {
  grade = 'A';
} else if (score >= 70 && score < 80) {
  grade = 'B';
} else if (score >= 60 && score < 70) {
  grade = 'C';
} else if (score >= 50 && score < 60) {
  grade = 'D';
} else if (score >= 0 && score < 50) {
  grade = 'F';
} else {
  grade = 'Invalid score';
}

console.log(`The student's grade is: ${grade}`);
