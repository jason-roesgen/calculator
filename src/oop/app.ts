import { Calculator } from "./calculator.js";

const calculator = new Calculator();

(window as any).calculator = calculator;


calculator.add(2,3);
calculator.subtract(17,5);
calculator.multiply(2,2);
calculator.divide(8,2);
