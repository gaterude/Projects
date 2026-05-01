function calculate(a, operator, b) {

  let num1 = Number(a);
  let num2 = Number(b);

  if ((operator === "/" || operator === "%") && num2 === 0) {
    return "Cannot divide by zero";
  }

  switch (operator) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "*":
      return num1 * num2;

    case "/":
      return num1 / num2;

    case "%":
      return num1 % num2;

    default:
      return "Invalid operator";
  }
}

console.log(calculate(6, '+', 5));
console.log(calculate(12, '/', 0));
console.log(calculate(9, '%', 0));
console.log(calculate(10, '^', 3));
console.log(calculate('8', '*', '7'));