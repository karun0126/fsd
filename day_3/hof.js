const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multipleOfThree = arr.map((num) => num * 3);
console.log(multipleOfThree);

const divisibleByFive = arr.filter((num) => num % 5 === 0);
console.log(divisibleByFive);

const firstDivisibleByFive = arr.find((num) => num % 5 === 0);
console.log(firstDivisibleByFive);

const sumOfArr = arr.reduce((num, acc) => acc += num, 0);
console.log(sumOfArr);
