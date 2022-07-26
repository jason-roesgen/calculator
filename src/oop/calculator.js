export class Calculator {
    constructor() {
        const buttons = document.querySelectorAll(".calculator__button");
        const result = document.querySelector(".calculator__result");
        for (const button of buttons) {
            if (button.value === "=") {
                button.addEventListener("click", () => {
                    const calculatedResult = this.calculate(result.value);
                    result.value = calculatedResult.toString();
                });
            }
            else {
                button.addEventListener("click", () => {
                    result.value += button.value;
                });
            }
        }
    }
    calculate(equation) {
        return eval(equation);
        if (equation.includes("+")) {
            const numbers = equation.split("+");
            const convertedNumberArray = [];
            for (const number of numbers) {
                const convertedNumber = parseFloat(number);
                convertedNumberArray.push(convertedNumber);
            }
            return this.add(...convertedNumberArray);
        }
        else if (equation.includes("-")) {
            const numbers = equation.split("-");
            const convertedNumberArray = [];
            for (const number of numbers) {
                const convertedNumber = parseFloat(number);
                convertedNumberArray.push(convertedNumber);
            }
            return this.subtract(...convertedNumberArray);
        }
        else if (equation.includes("*")) {
            const numbers = equation.split("*");
            const convertedNumberArray = [];
            for (const number of numbers) {
                const convertedNumber = parseFloat(number);
                convertedNumberArray.push(convertedNumber);
            }
            return this.multiply(...convertedNumberArray);
        }
        else if (equation.includes("/")) {
            const numbers = equation.split("/");
            const convertedNumberArray = [];
            for (const number of numbers) {
                const convertedNumber = parseFloat(number);
                convertedNumberArray.push(convertedNumber);
            }
            return this.divide(...convertedNumberArray);
        }
    }
    add(...args) {
        let sum = 0;
        for (const argument of args) {
            sum += argument;
        }
        return sum;
    }
    subtract(...args) {
        let sum = 0;
        for (const argument of args) {
            sum += argument;
        }
        return sum;
    }
    multiply(...args) {
        let sum = 0;
        for (const argument of args) {
            sum += argument;
        }
        return sum;
    }
    divide(...args) {
        let sum = 0;
        for (const argument of args) {
            sum += argument;
        }
        return sum;
    }
}
//# sourceMappingURL=calculator.js.map