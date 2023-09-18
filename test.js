// Function to calculate a future or past date
function calculateDate(baseDate, daysToAdd, monthsToAdd, yearsToAdd) {
  // Parse the baseDate string to a Date object
  const date = new Date(baseDate);

  // Calculate the new date
  date.setDate(date.getDate() + daysToAdd);
  date.setMonth(date.getMonth() + monthsToAdd);
  date.setFullYear(date.getFullYear() + yearsToAdd);

  // Format the new date as a string (e.g., "YYYY-MM-DD")
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

// Example usage:
const baseDate = "2023-09-18"; // Replace with your base date
const daysToAdd = 7;
const monthsToAdd = 0;
const yearsToAdd = 1;

const newDate = calculateDate(baseDate, daysToAdd, monthsToAdd, yearsToAdd);
console.log(newDate); // Output: "2024-09-25"
// Function to calculate a future or past time
function calculateTime(baseTime, hoursToAdd, minutesToAdd, secondsToAdd) {
  // Parse the baseTime string to a Date object
  const time = new Date(`1970-01-01T${baseTime}`);

  // Calculate the new time
  time.setHours(time.getHours() + hoursToAdd);
  time.setMinutes(time.getMinutes() + minutesToAdd);
  time.setSeconds(time.getSeconds() + secondsToAdd);

  // Format the new time as a string (e.g., "HH:MM:SS")
  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}

// Example usage:
const baseTime = '12:30:00'; // Replace with your base time
const hoursToAdd = 2;
const minutesToAdd = 15;
const secondsToAdd = 30;

const newTime = calculateTime(baseTime, hoursToAdd, minutesToAdd, secondsToAdd);
console.log(newTime); // Output: "14:45:30"
