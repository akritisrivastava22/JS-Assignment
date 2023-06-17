/*12. Create a human readable time format using the Date time object
    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm 
*/

const currentDate = new Date();

// YYYY-MM-DD HH:mm format
const yyyyMMddHHmm = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')} ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}`;

// DD-MM-YYYY HH:mm format
const ddMMYYYYHHmm = `${currentDate.getDate().toString().padStart(2, '0')}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getFullYear()} ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}`;

// DD/MM/YYYY HH:mm format
const ddMMYYYYslashHHmm = `${currentDate.getDate().toString().padStart(2, '0')}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getFullYear()} ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}`;

console.log("YYYY-MM-DD HH:mm:", yyyyMMddHHmm);
console.log("DD-MM-YYYY HH:mm:", ddMMYYYYHHmm);
console.log("DD/MM/YYYY HH:mm:", ddMMYYYYslashHHmm);
