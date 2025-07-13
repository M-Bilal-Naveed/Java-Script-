let userName = prompt("Enter your friends name: "); 
let randomInt = ((Math.floor((Math.random()*10))+1)*10); 
if(randomInt >= 80){ 
alert("Marvellous: Your Friendship score is " + randomInt + " %"); 
}else if(randomInt >= 60){ 
alert("Very Good: Your Friendship score is " + randomInt + " %"); 
}else if(randomInt >= 40){ 
alert("Not Bad: Your Friendship score is " + randomInt + " %"); 
}else{ 
alert("Too Bad: Your Friendship score is " + randomInt + " %"); 
}