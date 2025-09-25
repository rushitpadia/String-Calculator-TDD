const { expect } = require("chai");
const { add }  = require('../src/calculator');
const { describe } = require("mocha");

describe("String Calculator TDD", () => {
    it("Testcase 1: Should return 0 for an empty string", () => {
        expect(add("")).to.equal(0);
    });
    it("Testcase 2: should return the number itself if only one number is provided", () => {
        expect(add("4")).to.equal(4);
    });
    it("Testcase 3: should return sum of two numbers separated by comma", () => {
        expect(add("4,5")).to.equal(9);
    });
    it("Testcase 4: should return sum of multiple comma-separated numbers", () => {
        expect(add("1,2,3,4,5")).to.equal(15);
    });
    it("Testcase 5: should handle new lines between numbers as well as commas", () => {
        expect(add("1\n2,3")).to.equal(6);
    })
    it("Testcase 6: should support custom delimiters", () => {
        expect(add("//;\n1;2")).to.equal(3);
        expect(add("//|\n2|3|4")).to.equal(9);
      });
});