const add = function(num1,num2) {
  return num1 + num2;
};

const subtract = function(num1,num2) {
  return num1 - num2;
};

const sum = function(sumArr) {
   let totalSum = 0;
   for(let i = 0; i < sumArr.length; i++)
   {
    totalSum = totalSum + sumArr[i];
   }
  return totalSum;
};
const multiply = function(mulArr) {
  let totalProduct = 1;
  for(let i = 0; i < mulArr.length; i++)
  {
    totalProduct = totalProduct * mulArr[i];
  }
  return totalProduct;
};

const power = function(base,exponent) {
  let result = 1;
 for(let i = 0; i < exponent; i++)
 {
   result *= base;
 }
 return result;
};

const factorial = function(factorialNum) {
  let factorialResult = 1;
  for(let i = factorialNum; i >= 1; i--)
  {
      factorialResult = factorialResult * i;
  }	
  return factorialResult;
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
