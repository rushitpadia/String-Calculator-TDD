const { expect } = require("chai");
const StringCalculatorTDD  = require('../src/calculator');
const { describe } = require("mocha");

describe("String Calculator TDD", () => {
    let calculator;
    beforeEach(() => calculator = new StringCalculatorTDD());
    it("Testcase 1: Should return 0 for an empty string", () => {
        expect(calculator.add("")).to.equal(0);
    });
    it("Testcase 2: should return the number itself if only one number is provided", () => {
        expect(calculator.add("4")).to.equal(4);
    });
    it("Testcase 3: should return sum of two numbers separated by comma", () => {
        expect(calculator.add("4,5")).to.equal(9);
    });
    it("Testcase 4: should return sum of multiple comma-separated numbers", () => {
        expect(calculator.add("1,2,3,4,5")).to.equal(15);
    });
    it("Testcase 5: should handle new lines between numbers as well as commas", () => {
        expect(calculator.add("1\n2,3")).to.equal(6);
    })
    it("Testcase 6: should support custom delimiters", () => {
        expect(calculator.add("//;\n1;2")).to.equal(3);
        expect(calculator.add("//|\n2|3|4")).to.equal(9);
    });
    it("Testcase 7: should throw an exception when a negative number is provided", () => {
        expect(() => calculator.add("1,-2,3,-4")).to.throw("Negatives not allowed: -2,-4");
        expect(() => calculator.add("-5")).to.throw("Negatives not allowed: -5");
    });
    it("Testcase 8: should track how many times Add method was called", () => {
        calculator.add("1,2");
        calculator.add("3,4");
        expect(calculator.getCalledCount()).to.equal(2);
        calculator.add("5\n6,7");
        expect(calculator.getCalledCount()).to.equal(3);
    });
});