# String Calculator (TDD Kata in Node.js)

A simple **String Calculator** implemented in **Node.js** using **Test Driven Development (TDD)** principles.  

The calculator exposes a single function:  

```js
add(numbers: string) => number
```
* Input: a string of numbers ( can be comma-separated numbers or define delimiter to separate numbers )
* Output: the sum of those numbers (as an integer)


## Project Structure
```
string-calculator/
├── src/
│   └── calculator.js       # Implementation
├── test/
│   └── calculator.test.js  # Unit tests (Mocha + Chai)
├── package.json
└── README.md
```

## Setup Installation
```
# Clone repo
git clone git@github.com:rushitpadia/String-Calculator-TDD.git
cd String-Calculator-TDD

# Required Node version: v22.15.0 or +

# Install dependencies
npm install
```

## Running Test
```
npm test
```

## Testcases
```
String Calculator TDD

    √ Testcase 1: Should return 0 for an empty string
    √ Testcase 2: should return the number itself if only one number is provided
    √ Testcase 3: should return sum of two numbers separated by comma
    √ Testcase 4: should return sum of multiple comma-separated numbers
    √ Testcase 5: should handle new lines between numbers as well as commas
    √ Testcase 6: should support custom delimiters
    √ Testcase 7: should throw an exception when a negative number is provided
    √ Testcase 8: should track how many times Add method was called
    √ Testcase 9: should ignore numbers bigger than 1000
```