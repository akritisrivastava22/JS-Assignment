//07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

const arrvariable = ["programming", "MERN", "Express", "Pwskills", "development", "Pwskills"];
const firstindex = arrvariable.lastIndexOf("Pwskills")
const lastindex = arrvariable.lastIndexOf("Pwskills", firstindex-1)
console.log("First Index:",firstindex);
console.log("Last Index:",lastindex);

