let guestList = ["Zubair","Abdullah","Hamza","Umar","Salman","Abubakar"]; 
let userInput = prompt("Enter your name:"); 
if(guestList.includes(userInput)){ 
console.log(`Welcome, ${userInput}`); 
} 
else{ 
console.log(`Sorry ${userInput}, you are not invited`); 
} 