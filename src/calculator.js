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
    const splitStringNumbers = numbers.split(delimiterPattern);
    return splitStringNumbers.reduce((sum, num) => sum + parseInt(num),0);
}

module.exports = { add };