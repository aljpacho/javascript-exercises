const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
	return nums.reduce(
    (accumulator, currentVal) => accumulator + currentVal, 0
  )
};

const multiply = function(nums) {
  return nums.reduce(
    (accumulator, currentVal) => accumulator * currentVal, 1
  )
};

const power = function(num, power) {
	return num ** power
};

const factorial = function(num) {
	let value = 1
  if (num == 1 || num === 1) {
    return 1
  } else {
    for (let i = num; i > 1; i--) {
      value *= i
    }

    return value
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
