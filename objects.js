// #1
const person = {
  name: "John",
  lastName: "Petersons",
  age: 40,
  education: true,
  married: true,
  siblings: ["anna", "susan", "brett"],
  gretting: function () {
    console.log("Hello my naem is ");
  },
};
console.log(person.name);
console.log(person.siblings);

// #2
const car = {
  make: "USA",
  model: "SUV",
  year: 2023,
  colors: ["white", "red", "black", "silver"],
  hybrid: true,
  drive: function () {
    console.log("Yay, I'm the fastest caaar!");
  },
  stop: function () {
    console.log("Stopped!");
  },
};

console.log(car.make);
console.log(car.colors[0]);
console.log(car.drive);
console.log(car.stop);
