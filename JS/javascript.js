// ------------ DAILY CHALLENGE ------------
let result= document.getElementById("myDiv")
// Prompt the user for two different numbers
const num1 = prompt("enter your digit", 100);
result.innerHTML += `<p>num1 = ${num1} </p>`;
const num2 = prompt("enter your digit", 200);
result.innerHTML += `<p>num2 = ${num2} </p>`;
// Convert the values to integers
// Store the two integers as variables
let parsedNum1 = parseInt(num1)
let parsedNum2 = parseInt(num2)
// Compare the two numbers
//Alert the larger number
if (parsedNum1>=parsedNum2){
    result.innerHTML += "<p>num1 is less than to num2</p>"
} 
else if (parsedNum2>=parsedNum1){
    result.innerHTML += "<p>num2 is greater than num1</p>"
    alert(parsedNum2)
}
else {
    result.innerHTML += "<p>num1 and num2 are equal</p>"
}

// ------------ TAKE HOME CHALLENGE ------------
// Add an edge case to your daily challenge code
// Check if the user input anything other than a number
// If so, prompt the user again to input a number
