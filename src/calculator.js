class StringCalculatorTDD {
    constructor(){
        this.addMethodCalled = 0;
    }
    add(stringNumbers){
        this.addMethodCalled++;
        if(stringNumbers === null || stringNumbers === "") return 0;
        let delimiterPattern = /[\n,]/;
        let numbers = stringNumbers;
        // Handle custom delimiters
        if(numbers.startsWith("//")){
            const delimiterLineEndIndex = numbers.indexOf("\n"); //first \n position will be returned.
            const delimiterPart = numbers.substring(2, delimiterLineEndIndex);
            let delimiter = delimiterPart;
            if(delimiterPart.startsWith("[") && delimiterPart.endsWith("]")){
                delimiter = delimiterPart.slice(1, -1); // this will remove '[' and ']' so that we can have actual delimiter value
            }
            delimiterPattern = new RegExp(`[${delimiter}\n,]`);
            numbers = numbers.substring(delimiterLineEndIndex + 1);
        }
        const splitStringNumbers = numbers.split(delimiterPattern).map(Number).filter(num => num <= 1000); //checks for number more then 1000
    
        // checks for negative numbers
        const negativeNumbers = splitStringNumbers.filter(num => num < 0); 
        if(negativeNumbers.length > 0) throw new Error(`Negatives not allowed: ${negativeNumbers.join(",")}`);
        return splitStringNumbers.reduce((sum, num) => sum + num,0);
    }

    getCalledCount(){
        return this.addMethodCalled;
    }
}

module.exports = StringCalculatorTDD;