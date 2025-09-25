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
});