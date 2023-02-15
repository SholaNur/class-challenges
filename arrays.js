let fruits = ["apple", "banana", "plumb", 8];
let firstFruit = fruits[0];
fruits[3] = "watermelon";
console.log(firstFruit);
console.log(fruits);

function sum(num1, num2) {
  return num1 + num2;
}
sum(4, 6);

let arrNum = [1, 2, 4, 5, 6, 7, 8, 9, 20];
let sumArr = 0;
function takeAverage() {
  for (let i = 0; i < arrNum.length; i++) {
    sumArr += arrNum[i];
  }
  let avar = sumArr / arrNum.length;
  return avar;
}
console.log(takeAverage());
