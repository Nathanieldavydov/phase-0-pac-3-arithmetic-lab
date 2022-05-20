1 + 80;
60 - 40;
2 * 3.4;
5.0 / 2.5;
let a = 1;
let b = 80;
function add(a, b) {
    // we'll fill this shortly
return a + b;
};
function subract(a, b) {
    return a - b;
};
function multiply(a, b) {
    return a * b;
};
function divide(a, b) {
    return a / b;
};
let number = 10;

number++;

number;

number--;

number;

--number;

number;

++number;

number;

number += 6;

number -= 5;

number *= 12;

number /= 2;

number = 10;

function add5() {
  return (number += 5);
}

function divideBy3() {
  return (number /= 3);
}

divideBy3(); //=> 3.3333333333333335

add5(); //=> 8.333333333333334

// reset number
number = 10;

add5(); //=> 15

divideBy3(); //=> 5

parseInt("2", 10);