class StringCalculatorTDD {
    constructor(){
        this.addMethodCalled = 0;
    }
    add(stringNumbers){
        this.addMethodCalled++;
        if(stringNumbers === null || stringNumbers === "") return 0;
        let allDelimiters = [",","\n"];
        let numbers = stringNumbers;
        // Handle custom delimiters
        if(numbers.startsWith("//")){
            const delimiterLineEndIndex = numbers.indexOf("\n"); //first \n position will be returned.
            const delimiterPart = numbers.substring(2, delimiterLineEndIndex);
            if(delimiterPart.startsWith("[") && delimiterPart.endsWith("]")){
                const regex = /\[(.*?)\]/g;
                allDelimiters = [];
                let matchFound;
                while ((matchFound = regex.exec(delimiterPart)) != null) {
                    allDelimiters.push(matchFound[1]);
                }
            } else {
                allDelimiters = [delimiterPart];
            }
            numbers = numbers.substring(delimiterLineEndIndex + 1);
        }
        const delimiterRegex = new RegExp(allDelimiters.map(delim => escapeRegExpression(delim)).join("|"),"g");
        const splitStringNumbers = numbers.split(delimiterRegex).map(Number).filter(num => num <= 1000); //checks for number more then 1000
    
        // checks for negative numbers
        const negativeNumbers = splitStringNumbers.filter(num => num < 0); 
        if(negativeNumbers.length > 0) throw new Error(`Negatives not allowed: ${negativeNumbers.join(",")}`);
        return splitStringNumbers.reduce((sum, num) => sum + num,0);
    }

    getCalledCount(){
        return this.addMethodCalled;
    }
}

function escapeRegExpression(delim){
    return delim.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // regex to escape special characters from delimiters
}

module.exports = StringCalculatorTDD;