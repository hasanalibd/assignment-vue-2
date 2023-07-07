// Exercise 1: 
// Write a function named destructureExample that takes in an object and an array as parameters. The function should use destructuring to extract the values 'name' and 'age' from the object and the values at index 0 and index 2 from the array. The function should then return an object with the extracted values as properties with name and age

function destructureExample(obj, arr) {
    const { name, } = obj;
    const [a, b, age] = arr;
    
    return {
      name,
      age,
    };
  }

const obj = { name: 'Hasan Ali', age: 28, city: 'New York' };
const arr = [10, 20, 28, 40];
console.log(destructureExample(obj, arr)); // {name: 'Hasan Ali', age: 28}



// Exercise 2:
// Write a function named sumNumbers that takes in multiple numbers as arguments using the rest operator. The function should return the sum of all the numbers.

function sumNumbers(...numbers){
    // console.log(numbers);
    const result = numbers.reduce((o, n) => o + n)
    return result
}
console.log(sumNumbers(5, 6, 6, 7, 8, 10, 20)); // 62



// Exercise 3:
//  Write a function named createGreeting that takes in a name as a parameter and returns a greeting message using template literals. The message should be in the format: "Hello, [name]! Welcome to our website."

function createGreeting(name){
    return `Hello, ${name}! Welcome to our website`
}
console.log(createGreeting('Hasan Ali')); // Hello, Hasan Ali! Welcome to our website



// Exercise 4: 
// Write a function named isEven that takes in a number as a parameter and returns the string "Even" if the number is even, and "Odd" if the number is odd. Use a ternary operator instead of an if/else statement.

function isEven(number){
    return number % 2 === 0 ? "Even" : "Odd";
}

console.log(isEven(10)); // Even
console.log(isEven(7)); // Odd



// Exercise 5: 
// Convert the following function to an arrow function:
// function multiply(a, b) {
//     return a * b;
//   }
    
const multiply = (a, b) => a * b
console.log(multiply(9, 8)); // 72



// Exercise 6: 
// Write a function named getLargestNumber that takes in two numbers as parameters. The function should return the larger number using short-circuiting and logical operators (&&, ||, ??).

function getLargestNumber(number1, number2) {
    return number1 > number2 ? number1 : number2;
  }
  
console.log(getLargestNumber(13, 20)); // 20



// Exercise 7: 
// Write a function named getAddressCity that takes in an object representing a person's address. The address object has properties 'street', 'city', and 'country'. The function should return the value of the 'city' property if it exists, or the string "Unknown" if it doesn't exist, using optional chaining.

function getAddressCity(address) {
    return address?.city? city: "Unknown";
  }
const address = { street: '123 Main St', country: 'USA' };
console.log(getAddressCity(address)); // Unknown



// Exercise 8: 
// Write a function named doubleNumbers that takes in an array of numbers and returns a new array with each number doubled using the array map method.

const doubleNumbers = (numbers)=> numbers.map((n) => n * 2)
const nums = [3, 4, 5, 7, 9];
console.log(doubleNumbers(nums)); // [6, 8, 10, 14, 18]




// Exercise 9: 
// Write a function named filterEvenNumbers that takes in an array of numbers and returns a new array with only the even numbers using the array filter method.

const filterEvenNumbers = (numbers) =>{
    return numbers.filter((x) => x % 2 === 0)
}
const num2 = [3, 4, 5, 7, 9, 10, 13, 18, 22, 19, 35];
console.log(filterEvenNumbers(num2)); // [4, 10, 18, 22]



// Exercise 10: 
// Write a function named sumArray that takes in an array of numbers and returns the sum of all the numbers using the array reduce method.

const sumArray = (numbers) => numbers.reduce((o, n) => o + n)
const num3 = [3, 4, 5, 7, 9, 10];
console.log(sumArray(num3)); // 38




// Exercise 11: 
// Write a function named sortNumbers that takes in an array of numbers and returns a new array with the numbers sorted in ascending order using the array sort method.

const sortNumbers = (numbers) => {
    return numbers.sort((a, b) => a - b)
}
const numbers2 = [5, 2, 8, 1, 4];
console.log(sortNumbers(numbers2)); // [1, 2, 4, 5, 8]



