// Task 1 find a diagonal of a square

function findDiagonalOfSquare(side) {
  let diagonal = 0;
  diagonal = Math.sqrt(2) * side;
  return diagonal;
}

console.log(`Diagonal of square then side is 9 -->`, findDiagonalOfSquare(9));
console.log(`Diagonal of square then side is 35 -->`, findDiagonalOfSquare(35));

//Task 2 fin an area of triangle
console.log(`-----------------------`);

function triangleArea(a, b, c) {
  let semiPerimeter = 0;
  let area = 0;

  semiPerimeter = (a + b + c) / 2;
  area = Math.sqrt(
    semiPerimeter *
      (semiPerimeter - a) *
      (semiPerimeter - b) *
      (semiPerimeter - c)
  );

  return area;
}

console.log(`Area of triangle which sides: 5,6,7-->`, triangleArea(5, 6, 7));

//Task 3 find a circumference and Area of a circle
console.log(`-----------------------`);

function circumference(radius) {
  let c = 0;
  let area = 0;
  c = 2 * Math.PI * radius;
  area = Math.PI * radius ** 2;
  return `Then circle radius ${radius}: area ${area}, circumference ${c}.`;
}

console.log(circumference(4));

//Task 4 find and print larger integer
console.log(`-----------------------`);

function findBiggest(a, b) {
  if (a > b) return a;
  return b;
}

console.log(`Bigger integer is :`, findBiggest(5, 12));

//Task 5 even or odd
console.log(`-----------------------`);

function isEvenOrOdd(number) {
  if (number % 2 === 0) return `EVEN`;
  return `odd`;
}

console.log(`Given number 7 is:`, isEvenOrOdd(7));
console.log(`Given number 6 is:`, isEvenOrOdd(6));
console.log(`Given number 63 is:`, isEvenOrOdd(63));
console.log(`Given number 6956978 is:`, isEvenOrOdd(6956978));
console.log(`Given number 6956978 is:`, isEvenOrOdd(NaN));
console.log(`Given number 6956978 is:`, isEvenOrOdd(0));
