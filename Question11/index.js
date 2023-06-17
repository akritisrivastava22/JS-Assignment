/* 11. Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/
const currentDate = new Date();
const year = currentDate.getFullYear();
console.log("YEAR:",year);  //year today 

const month = currentDate.getMonth();
console.log("MONTH:",month); //month today

const datee = currentDate.getDate();
console.log("DATE:",datee); //date today

const day = currentDate.getDay();
console.log("DAY:",day); //day today 

const hours = currentDate.getHours();
console.log("HOURS:",hours); //hour 

const min = currentDate.getMinutes();
console.log("MINUTES:",min); //minute

const olddate = new Date('1970-01-01');
const difference = (currentDate-olddate)/1000;
console.log("seconds elapsed from January 1, 1970 to now:",difference);