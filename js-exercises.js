/**
 * Create a function that takes two numbers as arguments and returns their sum (e.g. add(3,2)=>5)
 */
function summ(a, b) {
  return a + b;
}

console.log('Test ' + summ(2, 3));

/**
 * Create a function that takes a number as an argument, increments the number by 1
 * and returns the result (e.g. nextNumber(1)=>2)
 */
function incrementByOne(a) {
  const result = a + 1;
  return result;
}

console.log(incrementByOne(5));

/**
 * Write a function that takes the base and height of a triangle
 * and return its area (e.g. triArea(7,4)=>14). Note area = (base*height)/2
 */
function triangleArea(base, height) {
  const area = (base * height) / 2;
  return area;
}

console.log(triangleArea(7, 4));

/**
 * Create a function that takes the age in years and returns the age in days (e.g. calcAge(65)=>23725)
 */
function ageInDays(age) {
  const calcAge = age * 365;
  return calcAge;
}

console.log(ageInDays(65));

/**
 * Write a function that takes an integer minutes and converts it to seconds (e.g. convert(5)=>300)
 */
function minsToSeconds(int) {
  const result = int * 60;
  return result;
}

console.log(minsToSeconds(5));

/**
 * Create a function that converts hours into seconds. (e.g. howManySeconds(2)=>7200)
 */
function hoursToSeconds(hours) {
  const result = hours * 60 * 60;
  return result;
}

console.log(hoursToSeconds(2));

/**
 * Given two arguments, return true if the sum of both numbers is less than 100.
 * Otherwise return false (e.g. lessThan100(22,15)=>true)
 */
function lessThan100(a, b) {
  const sum = a + b;

  if (sum < 100) {
    return true;
  } else {
    return false;
  }
}

console.log(lessThan100(22, 15));

/**
 * Create a function that takes a name and returns a greeting string (hello('RV')-' Hi RV')
 */
function hello(name) {
  return `Hi ${name}!`;
}

console.log(hello('Geta'));

/**
 * Create a function that calculates the chance of being an imposter. The formula is 100x(i/p) where i is the imposter count and
 * p is the player count. Round the value to the nearest integer and return the value as perrcentage
 * (e.g. formula(1,10)->10% imposter)
 */
function chanceOfImpostor(i, p) {
  const formula = 100 * (i / p);
  const result = Math.round(formula);
  return result;
}

console.log(chanceOfImpostor(1, 10));

/**
 * Create a function to check if an array contains a particular number. It should return true/false
 */
function containsNumber(arr, num) {
  return arr.includes(num);
}
const numbers = [1, 2, 3, 4, 5];
const target = 3;

const result = containsNumber(numbers, target);
console.log(result);

/**
 * OR
 */
function containsNumber2(arr, num) {
  let found = false;

  arr.forEach(function (element) {
    if (element === num) {
      found = true;
    }
  });

  return found;
}

console.log(containsNumber2([1, 2, 3, 4, 5], 8));
