const calculate = require("./operations");

function printCalculation(operator, calculate) {
    console.log("11 " + operator + " 7 = " + calculate(11, 7));
}

printCalculation('+', calculate.sum);
printCalculation('-', calculate.difference);
printCalculation('*', calculate.product);
printCalculation('/', calculate.quotient);