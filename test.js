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
