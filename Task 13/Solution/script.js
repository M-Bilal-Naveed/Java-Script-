let array = []; 
let c = 1; 
const add = (c) => { 
    if (c % 3 == 0 && c % 5 == 0) { 
        array.push("FizzBuzz"); 
    } else if (c % 3 == 0) { 
        array.push("Fizz"); 
    } else if (c % 5 == 0) { 
        array.push("Buzz"); 
    } else { 
        array.push(c); 
    } 
    return c + 1;   
}; 
 
for(let i = 1; i <= 15; i++){ 
c = add(c);   
// c = add(c); 
// c = add(c); 
} 
console.log(array);  