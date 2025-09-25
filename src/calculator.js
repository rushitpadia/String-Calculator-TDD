function add(stringNumbers){
    if(stringNumbers === null || stringNumbers === "") return 0;
    let delimiterPattern = /[\n,]/;
    let numbers = stringNumbers;
    // Handle custom delimiters
    if(numbers.startsWith("//")){
        const delimiterLineEndIndex = numbers.indexOf("\n"); //first \n position will be returned.
        const delimiter = numbers.substring(2, delimiterLineEndIndex);
        delimiterPattern = new RegExp(`[${delimiter}\n,]`);
        numbers = numbers.substring(delimiterLineEndIndex + 1);
    }
    const splitStringNumbers = numbers.split(delimiterPattern).map(Number);

    // checks for negative numbers
    const negativeNumbers = splitStringNumbers.filter(num => num < 0); 
    if(negativeNumbers.length > 0) throw new Error(`Negatives not allowed: ${negativeNumbers.join(",")}`)
    
    return splitStringNumbers.reduce((sum, num) => sum + num,0);
}

module.exports = { add };