// Assuming the previous task's string is stored in a variable
let previousString = "This is a long string that needs to be sliced. It contains more than 100 characters to demonstrate the slicing functionality in JavaScript.";

// Slice the string to keep only the first 100 characters
let slicedString = previousString.slice(0, 100);

// Get the remaining string after slicing
let remainingString = previousString.slice(100);

// Show the remaining sliced string in an alert message
alert("Remaining String: " + remainingString);

// Output the first 100 characters to the console (optional)
console.log("First 100 characters: " + slicedString);