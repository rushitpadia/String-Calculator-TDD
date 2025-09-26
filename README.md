# String Calculator (TDD Kata in Node.js)

A simple **String Calculator** implemented in **Node.js** using **Test Driven Development (TDD)** principles.  

The calculator exposes a class which has two methods (add & getCalledCount):  

```js
add(numbers: string) => number
// * Input: a string of numbers ( can be comma-separated numbers or define delimiter to separate numbers )
// * Output: the sum of those numbers (as an integer)
getCalledCount() => number
// * Output: number (returns howmany times add method has been called)
```


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
    √ Testcase 10: should support custom delimiters of any length
    √ Testcase 11: should support multiple custom delimiters
    √ Testcase 12: handles multiple delimiters with length longer than one char
```

## Usage Example
```js
// Imports
const StringCalculatorTDD = require("./src/calculator");

// Initilization
const calculator = new StringCalculatorTDD();

// Call add method of the class
console.log(calculator.add(""));            // 0
console.log(calculator.add("5"));           // 5
console.log(calculator.add("1,2"));         // 3
console.log(calculator.add("1\n2,3\n4"));   // 10
```

## License
This project is for educational & assessment purposes.