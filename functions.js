// 1. Exercise
function takeDif(x, y) {
  let i = x - y;
  return i;
}
console.log(takeDif(10, 8));

// 2. Exercise
function countLength(str) {
  return str.length;
}
countLength("Happy day for you! Yay!");

// 3. Exercise
function toUpperCase(str) {
  return str.toUpperCase();
}
toUpperCase("seattle");

// 4. Exercise

function takeProduct(num1, num2) {
  let total = num1 + num2;
  return total;
}
// 5. Exercise
function calculateTotal(subTotal, tax) {
  return subTotal + tax;
}
calculateTotal();

let order1 = calculateTotal(10, 8);
let order2 = calculateTotal(4675, 9987);
let order3 = calculateTotal(578, 23546);

//  6.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumEvenNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      let total = sum + numbers[i];
    }
  }
  return total;
}
sumEvenNumbers();
