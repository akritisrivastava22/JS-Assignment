/* 
22. The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method
*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Find the median age
const middleIndex = Math.floor(ages.length / 2);
const medianAge =
  ages.length % 2 === 1
    ? ages[middleIndex]
    : (ages[middleIndex - 1] + ages[middleIndex]) / 2;

// Find the average age
const sum = ages.reduce((total, age) => total + age, 0); //Learn reduce 
const averageAge = sum / ages.length;

// Find the range of the ages
const range = maxAge - minAge;

// Compare the values of (min - average) and (max - average) using abs() method
const diffMin = Math.abs(minAge - averageAge);
const diffMax = Math.abs(maxAge - averageAge);

console.log('Min Age:', minAge);
console.log('Max Age:', maxAge);
console.log('Median Age:', medianAge);
console.log('Average Age:', averageAge);
console.log('Range:', range);
console.log('Difference (Min - Average):', diffMin);
console.log('Difference (Max - Average):', diffMax);
