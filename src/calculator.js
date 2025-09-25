function add(stringNumbers){
    if(stringNumbers === null || stringNumbers === "") return 0;
    const splitStringNumbers = stringNumbers.split(",");
    if(splitStringNumbers.length === 1) return parseInt(splitStringNumbers[0]);
    return parseInt(splitStringNumbers[0]) + parseInt(splitStringNumbers[1]);
}

module.exports = { add };