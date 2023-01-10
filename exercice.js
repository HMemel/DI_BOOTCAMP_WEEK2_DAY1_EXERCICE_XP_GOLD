// Exercise 1 : Favorite Color

let me = ["my","favorite","color","is","blue"];

// Write some simple Javascript code that will join all the items in the array above, and console.log the result.
let sentence = me.join("");
console.log(sentence);
// my favorite color is blue



// Exercice 2 : Mix Up

// Create 2 variables. The values should be strings
let str1 = "mix"
let str2 = "pod"

// Slice out and swap the first 2 characters of the two strings from part 1.
// Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
let newWord = str2.substring(0,2)+str1.substring(2)+" "+str1.substring(0,2)+str2.substring(2)

// Finally console.log the new concatenated string.
console.log(newWord);



// Exercice 3 : Calculator

// Make a Calculator. Follow the instructions:

// Store the first number in a variable called
// Prompt the user for the second number.
let firstNumber = parseInt(prompt('Enter your first value'));
console.log(typeof(firstNumber));

// Store the second number in a variable called
let secondNumber= parseInt(prompt('Enter your second value'));
console.log(typeof(secondNumber));

let operator = prompt('Pick an operator: + , - , * , /');

// Create an Alert where the value is the SUM
let answer; 

if (operator=="+") {
    answer = firstNumber + secondNumber;
    alert("The sum of your calculation is :"+" " +answer);
} else if (operator=="-") {
    answer = firstNumber - secondNumber;
    alert("The subtraction of your calculation is :"+" " +answer);
} else if (operator=="*") {
    answer = firstNumber * secondNumber;
    alert("The multiplication of your calculation is :"+" " +answer);
} else if (operator=="/") {
    answer = firstNumber / secondNumber;
    alert("The division of your calculation is :"+" " +answer);
} else {
    answer = "You have not selected an available option. Reload page."
}

alert(answer)
